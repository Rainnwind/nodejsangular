var APP = angular.module("APP");

APP.controller("mainController", ["$scope", "$http", function(model, request) {
    model.name = "Alex";

    model.named = false;


    model.calculateQuantity = function() {
        model.name = "";
        model.named = false;
    };

    request.get("/test", {
            params: {
                my_string: "Jeg er en tyk streng"
            }
        })
        .then(function(data) {
            console.log(data);
            model.name = data.data;
            model.named = true;
        })
        .catch(function() {
            alert("Failed - NIC");
        });

}]);