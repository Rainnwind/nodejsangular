var rootApp = angular.module("rootApp");

rootApp.controller("mainController", ["$scope", "$http", function(model, request) {
    model.name = "Alex";


    request.get("test", {
            my_string: "Jeg er en tyk streng"
        })
        .then(function(data) {
            console.log(data);
            alert(data.data);
        })
        .catch(function() {
            alert("Failed - NIC");
        });

}]);