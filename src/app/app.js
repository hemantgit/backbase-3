// Initialize Angular module called 'APP', and include all dependencies and directories
var APP = angular.module('APP', ['ngRoute', 'weather']);

// routeProvider enables views and send variables using url
APP.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {

    "use strict";

    //Include all sections here
    $routeProvider
        .when('/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .when('/london/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .when('/paris/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .when('/madrid/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .when('/berlin/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .when('/roma/', {
            templateUrl: 'src/app/home/home.component.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/'
        }
    );
}]);

// Capitalize first letter filter
APP.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});

// List of posible routes (cities)
APP.constant('cities', [
    {'code' : 'London,uk', 'name' : 'london/'},
    {'code' : 'Paris,fr', 'name' : 'paris/'},
    {'code' : 'Madrid,es', 'name' : 'madrid/'},
    {'code' : 'Berlin,de', 'name' : 'berlin/'},
    {'code' : 'Roma,it', 'name' : 'roma/'}
]);

// Configuration for service
APP.constant('configuration',
    {'url': 'http://api.openweathermap.org/data/2.5/weather',
    'key': 'bdaa83d4a9585ade71fb7e04edfc6401',
    'cities': ['London,uk', 'Paris,fr', 'Madrid,es', 'Berlin,de', 'Roma,it']}
);
