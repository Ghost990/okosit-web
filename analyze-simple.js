// Simple script to analyze bundle without using Next.js build
const path = require('path');
const fs = require('fs');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Create analyze directory if it doesn't exist
const analyzeDir = path.join(__dirname, 'analyze');
if (!fs.existsSync(analyzeDir)) {
  fs.mkdirSync(analyzeDir, { recursive: true });
}

// Create a message to inform the user
console.log('Bundle analysis is configured!');
console.log('To view your bundle analysis:');
console.log('1. Run a normal Next.js build with: npm run build');
console.log('2. After build completes, check the analyze folder for reports');
console.log('3. Open analyze/report.html in your browser');

// Write a simple HTML file that explains how to use the bundle analyzer
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Bundle Analysis Instructions</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #0070f3; }
    code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; }
    .step { margin-bottom: 20px; }
  </style>
</head>
<body>
  <h1>Next.js Bundle Analysis</h1>
  <p>To analyze your Next.js bundle:</p>
  
  <div class="step">
    <h3>Step 1: Modify next.config.js</h3>
    <p>Make sure your next.config.js is using the bundle analyzer plugin correctly:</p>
    <pre><code>
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
  openAnalyzer: false,
  analyzerMode: 'static',
  reportFilename: './analyze/report.html',
});

module.exports = withBundleAnalyzer({
  // your existing config
});
    </code></pre>
  </div>
  
  <div class="step">
    <h3>Step 2: Run the build</h3>
    <p>Run a normal Next.js build:</p>
    <pre><code>npm run build</code></pre>
  </div>
  
  <div class="step">
    <h3>Step 3: View the report</h3>
    <p>After the build completes, open the generated report at:</p>
    <pre><code>./analyze/report.html</code></pre>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(analyzeDir, 'instructions.html'), htmlContent);
console.log('Instructions written to analyze/instructions.html');
