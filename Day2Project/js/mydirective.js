var customModule = angular.module("myDirectivesApp", []);

customModule.directive("myDiv", function(){
    return{
        restrict: "E",
        template: "My First Custom Tag Directive"
    }
})

customModule.directive("hello", function(){
    return{
        restrict: "A",
        link: function(currentScope, currentElement, attributes){
            currentElement.text("Hello Custom Directives - " +attributes.orgname)
        }
    }
})

customModule.directive("myName", function(){
    return{
        restrict: "E",
        scope: true,
        template: "{{fullName}}",
        link: function(currentScope, currentElement, attributes){
            currentScope.fullName = attributes.firstname +" "+ attributes.lastname
        }
    }
})

customModule.directive("namer", function(){
        return{
        restrict: "A",
        scope: true,
        template: "{{fullName}}",
        link: function(currentScope, currentElement, attributes){
            currentScope.fullName = attributes.firstname +" "+ attributes.lastname
        }
    }
})

customModule.directive("cnamer", function(){
        return{
        restrict: "C",
        scope: true,
        template: "{{fullName}}",
        link: function(currentScope, currentElement, attributes){
            currentScope.fullName = attributes.firstname +" "+ attributes.lastname
        }
    }
})