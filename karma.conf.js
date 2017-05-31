module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/app/shared/dependencies/angular.js',
      'src/app/shared/dependencies/angular-mocks.js',
      'src/app/shared/dependencies/angular-route.js',
      'src/app/shared/services/*.js',
      'src/app/app.js',
      'src/app/**/*.component.js',
      'src/app/**/tests/*.spec.js'
    ],

    logLevel: config.LOG_INFO,

    autoWatch : true,

    colors : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
            'karma-ie-launcher',
            'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    singleRun: true

  });
};
