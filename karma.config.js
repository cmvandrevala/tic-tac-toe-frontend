var webpack = require('karma-webpack')
var path = require('path')

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
      resolve: {
        alias: {
          "tic_tac_toe": path.join(__dirname, "src", "tic_tac_toe")
        }
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
