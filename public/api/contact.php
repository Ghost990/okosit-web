<?php
/**
 * OkosIT contact form endpoint (static hosting / cPanel).
 *
 * Abuse protection: same-origin check, honeypot, fill-time trap, strict field
 * limits, per-IP + global rate limits, idempotency key, no automatic retries.
 *
 * Secrets live OUTSIDE the webroot — see deploy/contact-config.example.php.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
$configCandidates = [
    getenv('OKOSIT_CONTACT_CONFIG') ?: '',
    dirname(__DIR__, 2) . '/okosit-contact-config.php', // ~/okosit-contact-config.php when webroot is ~/public_html
];
$config = null;
foreach ($configCandidates as $path) {
    if ($path !== '' && is_file($path)) {
        $config = require $path;
        break;
    }
}
$transport = is_array($config) ? ($config['transport'] ?? 'resend') : '';
$configOk = match ($transport) {
    'smtp'   => !empty($config['smtp_user']) && !empty($config['smtp_pass']),
    'resend' => !empty($config['resend_api_key']),
    default  => false,
};
if (!$configOk) {
    error_log('[contact] missing or incomplete config');
    respond(503, ['error' => 'unavailable']);
}

$cfg = array_merge([
    'from'               => 'OkosIT Weboldal <noreply@okosit.hu>',
    'to'                 => ['info@okosit.hu'],
    'allowed_origins'    => ['https://okosit.hu', 'https://www.okosit.hu'],
    'storage_dir'        => dirname(__DIR__, 2) . '/okosit-contact-data',
    'ip_limit_window'    => 600,  // seconds
    'ip_limit_max'       => 3,    // submissions per IP per window
    'ip_daily_max'       => 10,   // submissions per IP per 24h
    'global_daily_max'   => 50,   // hard cap for the whole site per 24h
    'min_fill_seconds'   => 3,
    'max_fill_seconds'   => 7200,
    // SMTP (alternative transport): authenticated mailbox on the domain's own mail server
    'smtp_host'          => 'mail.enexis.hu',
    'smtp_port'          => 465,
    'smtp_secure'        => 'ssl', // 'ssl' (implicit TLS, 465) or 'tls' (STARTTLS, 587)
    'from_name'          => 'OkosIT Weboldal',
], $config);

// ---------------------------------------------------------------------------
// Request guards
// ---------------------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'method_not_allowed']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === '' || !in_array($origin, $cfg['allowed_origins'], true)) {
    respond(403, ['error' => 'forbidden']);
}

if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) {
    respond(415, ['error' => 'unsupported_media_type']);
}

$raw = file_get_contents('php://input', false, null, 0, 20001);
if ($raw === false || strlen($raw) > 20000) {
    respond(413, ['error' => 'payload_too_large']);
}

$input = json_decode($raw, true);
if (!is_array($input)) {
    respond(400, ['error' => 'invalid_json']);
}

// Honeypot: real users never see or fill this field. Pretend success so bots learn nothing.
if (!empty($input['website'])) {
    respond(200, ['success' => true]);
}

// Fill-time trap
$startedAt = isset($input['startedAt']) && is_numeric($input['startedAt']) ? (int) ($input['startedAt'] / 1000) : 0;
$elapsed = time() - $startedAt;
if ($startedAt === 0 || $elapsed < $cfg['min_fill_seconds'] || $elapsed > $cfg['max_fill_seconds']) {
    respond(200, ['success' => true]);
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
function field(array $in, string $key, int $max, bool $singleLine = true): string
{
    $v = isset($in[$key]) && is_string($in[$key]) ? trim($in[$key]) : '';
    if ($singleLine) {
        $v = preg_replace('/[\r\n\t]+/', ' ', $v) ?? '';
    }
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_strlen($v) > $max ? '' : $v;
}

$firstName = field($input, 'firstName', 100);
$lastName  = field($input, 'lastName', 100);
$email     = field($input, 'email', 254);
$phone     = field($input, 'phone', 40);
$company   = field($input, 'company', 150);
$subject   = field($input, 'subject', 200);
$message   = field($input, 'message', 5000, false);

if ($firstName === '' || $lastName === '' || $email === '' || $subject === '' || mb_strlen($message) < 10) {
    respond(422, ['error' => 'invalid_fields']);
}
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(422, ['error' => 'invalid_email']);
}
if ($phone !== '' && !preg_match('/^[0-9+()\/\-\s.]{6,40}$/', $phone)) {
    respond(422, ['error' => 'invalid_fields']);
}
if (($input['terms'] ?? false) !== true) {
    respond(422, ['error' => 'terms_required']);
}
// Link-stuffed spam
if (preg_match_all('~https?://~i', $message) > 3) {
    respond(200, ['success' => true]);
}

// ---------------------------------------------------------------------------
// Rate limiting (file-based, locked)
// ---------------------------------------------------------------------------
$dir = $cfg['storage_dir'];
if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
    error_log('[contact] cannot create storage dir');
    respond(503, ['error' => 'unavailable']);
}

$fp = fopen($dir . '/ratelimit.json', 'c+');
if ($fp === false || !flock($fp, LOCK_EX)) {
    respond(503, ['error' => 'unavailable']);
}

$now = time();
$state = json_decode(stream_get_contents($fp) ?: '{}', true) ?: [];
if (!isset($state['hits'], $state['sent'])) {
    $state = ['hits' => [], 'sent' => []]; // fresh or legacy format
}
$ipKey = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . '|okosit');
$msgKey = hash('sha256', mb_strtolower($email) . '|' . $subject . '|' . $message);

// Drop entries older than 24h
$state['hits'] = array_filter(array_map(
    static fn (array $hits) => array_values(array_filter($hits, static fn (int $t) => $t > $now - 86400)),
    $state['hits']
));
$state['sent'] = array_filter($state['sent'], static fn (int $t) => $t > $now - 86400);

// Identical message already sent in the last 24h: report success, don't send again
if (isset($state['sent'][$msgKey])) {
    flock($fp, LOCK_UN);
    fclose($fp);
    respond(200, ['success' => true]);
}

$ipHits     = $state['hits'][$ipKey] ?? [];
$recentHits = array_filter($ipHits, static fn (int $t) => $t > $now - $cfg['ip_limit_window']);
$globalHits = array_sum(array_map('count', $state['hits']));

$limited = count($recentHits) >= $cfg['ip_limit_max']
    || count($ipHits) >= $cfg['ip_daily_max']
    || $globalHits >= $cfg['global_daily_max'];

$saveState = static function () use ($fp, &$state): void {
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($state));
    fflush($fp);
};

if (!$limited) {
    // Count the attempt BEFORE sending, so a slow/failing provider can't be hammered
    $state['hits'][$ipKey][] = $now;
    $saveState();
}

if ($limited) {
    flock($fp, LOCK_UN);
    fclose($fp);
    if ($globalHits >= $cfg['global_daily_max']) {
        error_log('[contact] global daily cap reached');
    }
    header('Retry-After: ' . $cfg['ip_limit_window']);
    respond(429, ['error' => 'rate_limited']);
}

// ---------------------------------------------------------------------------
// Send (single attempt, no retries)
// ---------------------------------------------------------------------------
$e = static fn (string $s) => htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$na = 'Nincs megadva';

$html = '<h2>Új kapcsolatfelvételi űrlap</h2>'
    . '<p><strong>Név:</strong> ' . $e("$firstName $lastName") . '</p>'
    . '<p><strong>Email:</strong> ' . $e($email) . '</p>'
    . '<p><strong>Telefonszám:</strong> ' . $e($phone ?: $na) . '</p>'
    . '<p><strong>Cég:</strong> ' . $e($company ?: $na) . '</p>'
    . '<p><strong>Tárgy:</strong> ' . $e($subject) . '</p><hr />'
    . '<h3>Üzenet:</h3><p>' . nl2br($e($message)) . '</p>';

$text = "Név: $firstName $lastName\nEmail: $email\nTelefonszám: " . ($phone ?: $na)
    . "\nCég: " . ($company ?: $na) . "\nTárgy: $subject\n\nÜzenet:\n$message\n";

/**
 * Minimal authenticated SMTP client (implicit TLS on 465, or STARTTLS on 587).
 * Throws RuntimeException on any unexpected server reply.
 */
function smtpSend(array $cfg, array $to, string $replyTo, string $subject, string $text, string $html): void
{
    $secure = $cfg['smtp_secure'] === 'ssl';
    $ssl = ['verify_peer' => true, 'verify_peer_name' => true];
    if (!empty($cfg['smtp_cafile'])) {
        $ssl['cafile'] = $cfg['smtp_cafile']; // custom CA (still verified), mainly for local testing
    }
    $ctx = stream_context_create(['ssl' => $ssl]);
    $sock = @stream_socket_client(
        ($secure ? 'ssl://' : 'tcp://') . $cfg['smtp_host'] . ':' . (int) $cfg['smtp_port'],
        $errno, $errstr, 10, STREAM_CLIENT_CONNECT, $ctx
    );
    if ($sock === false) {
        throw new RuntimeException("connect failed: $errstr ($errno)");
    }
    stream_set_timeout($sock, 15);

    $read = static function () use ($sock): string {
        $out = '';
        while (($line = fgets($sock, 515)) !== false) {
            $out .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        return $out;
    };
    $cmd = static function (?string $line, array $expect) use ($sock, $read): string {
        if ($line !== null) {
            fwrite($sock, $line . "\r\n");
        }
        $reply = $read();
        if (!in_array((int) substr($reply, 0, 3), $expect, true)) {
            $shown = str_starts_with((string) $line, 'AUTH') ? 'AUTH' : strtok((string) $line, ' ');
            throw new RuntimeException("unexpected reply to $shown: " . trim($reply));
        }
        return $reply;
    };

    $helo = 'okosit.hu';
    $cmd(null, [220]);
    $cmd("EHLO $helo", [250]);
    if (!$secure) {
        $cmd('STARTTLS', [220]);
        if (!stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT)) {
            throw new RuntimeException('STARTTLS failed');
        }
        $cmd("EHLO $helo", [250]);
    }
    $cmd('AUTH LOGIN', [334]);
    $cmd(base64_encode($cfg['smtp_user']), [334]);
    $cmd(base64_encode($cfg['smtp_pass']), [235]);

    $from = $cfg['smtp_user'];
    $cmd("MAIL FROM:<$from>", [250]);
    foreach ($to as $rcpt) {
        $cmd("RCPT TO:<$rcpt>", [250, 251]);
    }
    $cmd('DATA', [354]);

    $boundary = 'b_' . bin2hex(random_bytes(12));
    $headers = [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . mb_encode_mimeheader($cfg['from_name'], 'UTF-8', 'B') . " <$from>",
        'To: ' . implode(', ', $to),
        "Reply-To: <$replyTo>",
        'Subject: ' . mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n"),
        'Message-ID: <' . bin2hex(random_bytes(16)) . '@okosit.hu>',
        'MIME-Version: 1.0',
        "Content-Type: multipart/alternative; boundary=\"$boundary\"",
    ];
    $part = static fn (string $type, string $body) => "--$boundary\r\n"
        . "Content-Type: $type; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($body), 76, "\r\n");
    $data = implode("\r\n", $headers) . "\r\n\r\n"
        . $part('text/plain', $text) . $part('text/html', $html) . "--$boundary--\r\n";

    // base64 bodies never start a line with '.', but stay safe anyway
    $data = preg_replace('/^\./m', '..', $data);
    fwrite($sock, $data . "\r\n.\r\n");
    $cmd(null, [250]);
    $cmd('QUIT', [221]);
    fclose($sock);
}

function resendSend(array $cfg, array $to, string $replyTo, string $subject, string $text, string $html, string $idemKey): void
{
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . $cfg['resend_api_key'],
            'Content-Type: application/json',
            'Idempotency-Key: ' . $idemKey,
        ],
        CURLOPT_POSTFIELDS     => json_encode([
            'from' => $cfg['from'], 'to' => $to, 'reply_to' => $replyTo,
            'subject' => $subject, 'html' => $html, 'text' => $text,
        ], JSON_UNESCAPED_UNICODE),
    ]);
    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);
    if ($response === false || $status < 200 || $status >= 300) {
        throw new RuntimeException("resend HTTP $status");
    }
}

$mailSubject = 'Kapcsolatfelvétel: ' . $subject;
try {
    if ($transport === 'resend') {
        resendSend($cfg, $cfg['to'], $email, $mailSubject, $text, $html, $msgKey);
    } else {
        smtpSend($cfg, $cfg['to'], $email, $mailSubject, $text, $html);
    }
} catch (Throwable $ex) {
    flock($fp, LOCK_UN);
    fclose($fp);
    error_log('[contact] send failed (' . $transport . '): ' . $ex->getMessage());
    respond(502, ['error' => 'send_failed']);
}

$state['sent'][$msgKey] = $now;
$saveState();
flock($fp, LOCK_UN);
fclose($fp);

respond(200, ['success' => true]);
