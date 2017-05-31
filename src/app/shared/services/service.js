// Service for weather data
angular.module('weather', [])
.service('WeatherService', function ($http, configuration) {
    return {
        getInformation: function (city) {
            var promise = $http.get(configuration.url + '?q=' + city + '&&appid=' + configuration.key + '&units=metric')
                    .then(function (result) {
                        if (result.status == 200) {
                            return {
                                cityName: result.data.name,
                                iconWeather: result.data.weather[0].icon,
                                currentWeather: result.data.weather[0].main,
                                descriptionWeather: result.data.weather[0].description,
                                averageWeather: result.data.main.temp,
                                windStrength: result.data.wind.speed
                            };
                        } else {
                            console.log('Connection error');
                        }
                    });
            return promise;
        }
    }
});
