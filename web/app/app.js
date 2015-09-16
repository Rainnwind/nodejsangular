var APP = angular.module("APP", ['ngRoute']);


/****************************************************
 *                                                  *
 *              Defining components                 *
 *                                                  *
 ***************************************************/
APP.directive("topbar", [function() {
    return {
        templateUrl: "components/topbar.html"
    }
}])