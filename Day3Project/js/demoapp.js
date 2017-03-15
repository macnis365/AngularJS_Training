/*Create a Module "demoApp*/
var demoAppModule = angular.module("demoApp", []);

/*Register a controller without scope*/
demoAppModule.controller("FirstCtrl", function(){
    /*Define a Model*/
    this.msg = "This is First Controller Message.";
    /*Define a Behaviour in this controller(constructor)*/
    this.justDoIt = function() {
        alert("Fist Controller ALERT message.")
    }
})

/*Register a controller with Scope*/ /*problem with uglifyjs*/
/*demoAppModule.controller("DemoController", function($scope){*/
    /*Define a counter model with 0*/
/*    $scope.counter = 0;*/
    /*Define a Bheviour to increase counter value*/
 /*   $scope.increamentCounter = function(){
        $scope.counter = $scope.counter+1;
    };*/
/*})*/

demoAppModule.controller("DemoController", ["$scope", function(scopeasargument){
    scopeasargument.counter = 0;
    scopeasargument.increamentCounter = function() {
        scopeasargument.counter += 1;
    }
}])