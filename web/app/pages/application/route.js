var APP = angular.module("APP");

APP.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("*", {
            controller: "contactController",
            resolve: {
                beforeModel: function($http) {
                    console.log("1a");
                    return $http.get("test")
                        .then(function(response) {
                            return response.data;
                        })
                        .catch(function(err) {
                            return null;
                        });
                },
                model: function($http) {
                    console.log("a");
                    return $http.get("test")
                        .then(function(response) {
                            return response.data;
                        })
                        .catch(function(err) {
                            return null;
                        });
                },
                afterModel: function($http) {
                    console.log("b");
                    return $http.get("test")
                        .then(function(response) {
                            return response.data;
                        })
                        .catch(function(err) {
                            return null;
                        });
                }
            }
        });
    $locationProvider.html5Mode(true);
});