var rootApp = angular.module("rootApp");
rootApp.controller("mainController", function($scope) {
    alert("Hej");
    $scope.name = 'Alex';
    console.log($scope);
});