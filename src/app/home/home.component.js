// Controller for Home
APP.controller('homeController', function ($rootScope, $scope, $http, cities, configuration, WeatherService, $location) {

    // Initialize variables
    $scope.cities = cities;
    $scope.defaultCity = 'London,uk';
    $scope.data = [];
    $rootScope.defaultroute = '/';
    $scope.icons = ['01d', '02d', '03d', '04d', '09d', '010d', '011d', '013d', '050d'];

    /* getInfo method
     * @param {type} name
     * @returns {undefined}*/
    $scope.getInfo = function (name) {
        var data = [];
        WeatherService.getInformation(name)
            .then(function (result) {
                $scope.data = result;
            });
    };

    /* changeCity method
     * @param {type} name
     * @returns {undefined}*/
    $scope.changeCity = function (name) {
        $scope.defaultCity = name;
        $scope.info = $scope.getInfo($scope.defaultCity);
    };

    // Calls getInfo method whem the page loads
    $scope.getInfo($scope.defaultCity);

    // Once the location path changes, call changeCity method
    if ($location.path().substring(1)) {
        var cityRoute = $location.path().substring(1);
        for (var i=0; i < $scope.cities.length; i++) {
            if ($scope.cities[i].name == cityRoute) {
                 $rootScope.defaultroute = cityRoute;
                 $scope.changeCity($scope.cities[i].code);
            }
        }
    }

});
