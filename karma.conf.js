export default function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/data/productos.js', type: 'module', included: false, served: true },
      { pattern: 'src/data/productos.test.js', type: 'module', included: true }
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
}