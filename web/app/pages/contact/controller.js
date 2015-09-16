var APP = angular.module("APP");

APP.controller("contactController", function($scope, $http, model, afterModel) {
    $scope.model = model;
    console.log("Model: " + model);
    console.log("afterModel: " + afterModel);
    $scope.name = "Alex";
    $scope.test = "test";

    $scope.named = false;


});