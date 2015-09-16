var APP = angular.module("APP");

APP.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/index/template.html",
        resolve: {
            test222: function() {
                console.log("Index route was hit! test222");
            },
            doSomeMore: function() {
                console.log("Did some more");
            }
        }
    });
    $locationProvider.html5Mode(true);
});