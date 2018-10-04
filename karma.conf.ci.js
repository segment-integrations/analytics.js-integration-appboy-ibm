/* eslint-env node */
'use strict';

var baseConfig = require('./karma.conf');

var customLaunchers = {
  sl_chrome_latest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest'
  },
  sl_chrome_latest_1: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-1'
  },
  sl_firefox_latest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest'
  },
  sl_firefox_latest_1: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-1'
  },

  // Note:

  // For reasons unclear to us at the time of this writing, there appear to be
  // issues with SauceLabs and Safari/IE/Edge for this integration. Though
  // SauceLabs logs that all tests have passed, the Karma runner in CircleCI
  // nonetheless hangs, as though it was not informed of this development.
  //
  // We have not determined the cause of this behavior. Note that A.js-Private,
  // the ultimate source of truth on what will be served to end-users, still
  // runs on all relevant browsers. It is only for the unit test of this
  // repository that certain browsers are skipped.

  // sl_safari_9: {
  //   base: 'SauceLabs',
  //   browserName: 'safari',
  //   version: '9.0'
  // },
  // FIXME(ndhoule): Bad IE7/8 support in testing packages make these fail
  // sl_ie_7: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '7'
  // },
  // sl_ie_8: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '8'
  // },
  // sl_ie_9: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '9'
  // },
  // sl_ie_10: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '10'
  // },
  // sl_ie_11: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '11'
  // },
  // sl_edge_latest: {
  //   base: 'SauceLabs',
  //   browserName: 'microsoftedge'
  // }
};

module.exports = function(config) {
  baseConfig(config);

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are required but are missing');
  }

  config.set({
    browserDisconnectTolerance: 1,

    singleRun: true,

    reporters: ['progress', 'junit', 'coverage'],

    browsers: ['PhantomJS'].concat(Object.keys(customLaunchers)),

    customLaunchers: customLaunchers,

    junitReporter: {
      outputDir: process.env.TEST_REPORTS_DIR,
      suite: require('./package.json').name
    },

    sauceLabs: {
      testName: require('./package.json').name
    },

    coverageReporter: {
      reporters: [
        { type: 'lcov' }
      ]
    }
  });
};
