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
        templateUrl: "partials/manageitems.html",
        controller: "MenuController"
    })
    
    $routeProvider.otherwise({template: "<h3>OOOOOpsssss!!!!! Sorryy  No Resource Found. !@#$%</h3>"})
});

app.run(function(){
    console.log("Menu App - Run Phase...")
});

//Registe Value Object
//app.value('vorders', []);

//Register a Filter "truncate"
app.filter("truncate", function(){
    return function(inputTextParm, turncateLengthparam){
        var result = (inputTextParm.length > turncateLengthparam) ? inputTextParm.substr(0, turncateLengthparam)+"..." : input;
        return result;
    }
})