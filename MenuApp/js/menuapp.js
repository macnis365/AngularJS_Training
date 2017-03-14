//Create a Module "menuApp"

var app = angular.module("menuApp", ['CtrlModule', 'ngSanitize', 'ngRoute']);

//Module Loading Phases....
app.config(function($routeProvider){
    console.log("Menu App - Config Phase..");
    $routeProvider.when("/", {
        template: "<h1> Welocome to Restaurant </h1>"
    })
    
    $routeProvider.when("/menucard", {
        templateUrl: "partials/menucard.html"
    })
    
    $routeProvider.when("/manageitems", {
        templateUrl: "partials/manageitems.html"
    })
});

app.run(function(){
    console.log("Menu App - Run Phase...")
});

//Registe Value Object
//app.value('vorders', []);