<?php
/**
 * Copy to the hosting account's HOME directory (the folder that CONTAINS public_html):
 *   ~/okosit-contact-config.php
 * Never upload this file into the webroot and never commit real credentials.
 */
return [
    // Resend: okosit.hu must be verified in Resend (DKIM + send.okosit.hu SPF/MX records).
    'transport'      => 'resend',
    'resend_api_key' => 're_xxxxxxxxxxxxxxxxxxxxxxxx',
    'from'           => 'OkosIT Weboldal <noreply@okosit.hu>',
    'to'             => ['info@okosit.hu'],

    // Optional overrides (defaults shown):
    // 'allowed_origins'  => ['https://okosit.hu', 'https://www.okosit.hu'],
    // 'storage_dir'      => __DIR__ . '/okosit-contact-data',
    // 'ip_limit_window'  => 600,
    // 'ip_limit_max'     => 3,
    // 'ip_daily_max'     => 10,
    // 'global_daily_max' => 50,

    // Alternative: send through the domain's own mail server (Enexis) with a mailbox login
    // 'transport'        => 'smtp',
    // 'smtp_user'        => 'web@okosit.hu',
    // 'smtp_pass'        => 'MAILBOX_PASSWORD_HERE',
    // 'smtp_host'        => 'mail.enexis.hu',
    // 'smtp_port'        => 465,
    // 'smtp_secure'      => 'ssl',             // 'ssl' (465) or 'tls' (STARTTLS, 587)
];
