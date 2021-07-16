module.exports = (config) => {
  config.set({
    frameworks: [ 'jasmine', 'karma-typescript' ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript',
      'karma-spec-reporter'
    ],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.spec.json",
    },
    client: {
      // leave Jasmine Spec Runner output visible in browser
      clearContext: false
    },
    files: [ { pattern: 'lib/**/*.ts' }, { pattern: 'test/**/*.spec.ts' } ],
    exclude: ["lib/index.ts"],
    preprocessors: {
      'lib/**/*.ts': [ 'karma-typescript' ],
      'test/**/*.spec.ts': [ 'karma-typescript' ]
    },
    reporters: [ 'spec', 'karma-typescript' ],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: localBrowsers,
    browsers: ['ChromeHeadless'],
    singleRun: false
  })
}
