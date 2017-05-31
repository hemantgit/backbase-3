'use strict';

describe("*** Skeleton Controller Tests ***", function () {

    //Jasmine initialization
    beforeEach(function(){
      this.addMatchers({
        toEqualData: function(expected) {
          return angular.equals(this.actual, expected);
        }
      });
    });

    //Load APP Modules 
    beforeEach(module('APP'));


    //Tests for homeController
    describe("*** homeController TEST ***", function () {

          var rootScope, scope, http, Ctrl8, cities, configuration, WeatherService, location;

          // Initialize the controller and mock scope
          beforeEach(inject(function (_$rootScope_, _$http_, $controller, cities, configuration, WeatherService, $location) {

            rootScope = _$rootScope_.$new();
            scope = _$rootScope_.$new();
            http = _$http_;

            Ctrl8 = $controller('homeController', {
              $rootScope: rootScope,
              $scope: scope,
              $http: http,
              cities: cities,
              configuration: configuration,
              WeatherService: WeatherService,
              location: $location,
            });

          }));

          //Test 1
          it('should initialize variables', function(){
              expect(scope.cities[0]).toEqualData(
                {'code' : 'London,uk', 'name' : 'london/'}
              );   
          });

    });

});