exports.config = {
  allScriptsTimeout: 72000,

  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  suites: {
   test: 'src/app/**/tests/*.e2e-spec.js'
  },  

  chromeOnly: true,

  framework: 'jasmine2',
  
   onPrepare: function() {
       //https://github.com/bcaudan/jasmine-spec-reporter
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter(
        {
          displayStacktrace: 'none',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
          displayFailuresSummary: true, // display summary of all failures after execution
          displayPendingSummary: true,  // display summary of all pending specs after execution
          displaySuccessfulSpec: true,  // display each successful spec
          displayFailedSpec: true,      // display each failed spec
          displayPendingSpec: false,    // display each pending spec
          displaySpecDuration: true,   // display each spec duration
          displaySuiteNumber: false,    // display each suite number (hierarchical)
          colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
          },
          prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
          },
          customProcessors: []
        }              
      ));
   },  

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  }
};
