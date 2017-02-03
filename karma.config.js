var webpack = require('karma-webpack')

module.exports = function(config) {
  config.set({

    browsers: ["PhantomJS"],

    files: [
      {pattern: 'spec/**/*_spec.js', watched: false}
    ],

    frameworks: ['jasmine'],

    plugins: [
      webpack,
      'karma-jasmine',
      'karma-phantomjs-launcher',
      "karma-spec-reporter"
    ],

    preprocessors: {
      'spec/**/*_spec.js': ['webpack']
    },

    reporters: ["spec"],

    singleRun: true,

    webpack: {
      // karma watches the spec entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
