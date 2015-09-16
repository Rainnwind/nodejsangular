var APP = angular.module("APP");

APP.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        resolve: {
            delay: function($q) {
                alert("Application route was hit!");
            }
        }
    });
    $locationProvider.html5Mode(true);
});