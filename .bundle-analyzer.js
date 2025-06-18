module.exports = {
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
  analyzerMode: 'static',
  reportFilename: 'analyze/analyze.html',
  generateStatsFile: true,
  statsFilename: 'analyze/stats.json',
  defaultSizes: 'gzip',
  excludeAssets: null,
  logLevel: 'info',
}
