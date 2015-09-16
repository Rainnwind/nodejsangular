var APP = angular.module("APP");

APP.controller("applicationController", function($scope, $http) {
    $scope.__routes = {};

    /**
     *  When the application changes it's route, this listener checks the path of the url and divides it into tiny pieces
     *  and forms a routes object which can be used by the function "is_active"
     */
    $scope
        .$on("$routeChangeSuccess", function(next, current) {
            if (current) {

                var paths = current.$$route.originalPath.split("/");
                var l = paths.length;

                var path = $scope.__routes;
                for (var i = 0; i < l; i++) {
                    path[paths[i]] = {
                        active: true
                    };
                    path = path[paths[i]];
                }
            }
        });

    /**
     *  Splits the url up by / and checks if it's a subpage or actual page - Either subpage or actual page are marked with "active"
     */
    $scope.is_active = function(url) {
        var paths = url.split("/");
        var l = paths.length;
        var available_paths = $scope.__routes;
        for (var i = 0; i < l; i++) {
            if (!available_paths[paths[i]] || !available_paths[paths[i]].active)
                return "";
            available_paths = available_paths[paths[i]];
        }
        return "active";
    };
});