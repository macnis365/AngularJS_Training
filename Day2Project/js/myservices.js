var myservice = angular.module("serviceApp", []);

myservice.controller("ServicesController", function($scope, appTitle, myFactory, empFactory, studentService, myProvider){
    $scope.val = appTitle;
    
    $scope.factoryVal = myFactory;
    
    empFactory.setEmpName('Micheal');
    
    $scope.ename = empFactory.getEmpName();
    
    $scope.service = studentService;
    studentService.setStudentName('John');
    
    $scope.sname = $scope.service.getStudentName();
    
    $scope.providerValue = myProvider;
    //myProvider.setMyString('SG'); we cant use it because setMyString only avialble at Config phase, controllers are available only at RUN phase.
})

myservice.value("appTitle", "My Angular Title");

myservice.factory("myFactory", function(appTitle){
    console.log("My Factory Function");
    return "My Factory Function Message " + appTitle;
})

myservice.factory("empFactory", function() {
    var empName = '';
    
    //object creation, with getters and setters
    return {
        getEmpName: function(){
            return empName;
        },
        
        setEmpName: function(newValue){
            empName = newValue;
        }
    };
})

myservice.service("studentService", function(){
    var studentName = "";
    
    //this is used to make function accessable outside service 
    this.getStudentName = function(){
        return studentName;
    }
    
    this.setStudentName = function(newVal){
        studentName = newVal;
    }
})

myservice.config(function(myProviderProvider, myConstants){
    console.log("Config "+myConstants);
    myConstants = 'Soc Gen';
    console.log("Config "+myConstants);
    myProviderProvider.setMyString('SG')
})

myservice.run(function(studentService, myProvider){
    console.log("Run")
})

myservice.provider("myProvider", function(){
    console.log("This logic my available only at Config phase.");
    
    var myString = "This is My String *************";
    
    this.setMyString = function(newValue) {
        myString = newValue;
    }
    
    this.$get = function(){
        console.log("This logic $Get Function, which is available only at RUN phase.");
        return myString;
    }
})

myservice.constant("myConstants", "My Organisation Name");