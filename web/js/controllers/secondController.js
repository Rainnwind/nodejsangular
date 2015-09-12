var rootApp = angular.module("rootApp");


rootApp.controller("secondController", ["$scope", "$route", "$routeParams", "$location", function(model, route, params, location) {
    model.name = "LOL";
    model.params = params;
    model.secondClick = function() {
        alert("secondClick");
    }
}])