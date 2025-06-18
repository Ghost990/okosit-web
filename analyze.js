const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// Ensure the analyze directory exists
const analyzeDir = path.join(__dirname, 'analyze');
if (!fs.existsSync(analyzeDir)) {
  fs.mkdirSync(analyzeDir, { recursive: true });
}

// Get entries from both app and pages directories
const entries = {};

// Check if pages directory exists and has _app.js or _app.tsx
const pagesDir = path.join(__dirname, 'pages');
if (fs.existsSync(pagesDir)) {
  const appFile = fs.existsSync(path.join(pagesDir, '_app.js')) 
    ? './_app.js' 
    : fs.existsSync(path.join(pagesDir, '_app.tsx')) 
      ? './_app.tsx' 
      : null;
  
  if (appFile) {
    entries.pages = appFile;
  }
}

// Check if app directory exists and has layout.js or layout.tsx
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  const layoutFile = fs.existsSync(path.join(appDir, 'layout.js')) 
    ? './app/layout.js' 
    : fs.existsSync(path.join(appDir, 'layout.tsx')) 
      ? './app/layout.tsx' 
      : null;
  
  if (layoutFile) {
    entries.app = layoutFile;
  }
}

// Create a simple webpack config for analysis
const config = {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'analyze'),
    filename: '[name].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.join(analyzeDir, 'report.html'),
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: path.join(analyzeDir, 'stats.json'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

// Run webpack
webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString('errors-only'));
    process.exit(1);
  }
  
  console.log(stats.toString({ colors: true }));
  console.log('\nBundle analysis complete! Open analyze/report.html to view the results.');
});
