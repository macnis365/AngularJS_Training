// Create a Module "CtrlModule"
var ctrlModule = angular.module("CtrlModule", ['ServiceModule']);

//Module Loading Blocks
ctrlModule.config(function(){
    console.log("CtrlModule - Config Block")
})

ctrlModule.run(function(){
    console.log("CtrlModule - Run Block")
})

//Define a Controller "MainController"
ctrlModule.controller("MainController", function($scope, $location, $rootScope) {
    console.log("This is Main Controller Function");
    $scope.pageHeading = "<u>Restaurant Application</u>";
    
    $scope.$on("$routeChangeSuccess", function(){
        console.log("Route Change Successfully to - " + $location.path());
        
        if($location.path() === "/logout")
            $rootScope.isLogin = false;
            
    })
    
    $scope.$on("$routeChangeStart", function(){
        console.log("Route Change Start - " + $location.path());
        
        if(!$rootScope.isLogin) {
            if($location.path() == "/manageitems")
            {
                $location.path("/login")
            }
        }
    })
})

//ctrlModule.controller("MenuController", function($scope, vorders) {
ctrlModule.controller("MenuController", function($scope, MenuService, OrderService) {
    console.log("This is Menu Controller Function");
    
    $scope.itemsList = MenuService.getAllMenuItems();
    
    $scope.placeOrder = function(menuitem) {
        var orderedItem = {"name":menuitem.name, "price":menuitem.price, "qty":1}
//        vorders.push(orderedItem);
        OrderService.addOrderedItems(orderedItem);
    }
    
    $scope.save = function() {
        
        if($scope.newmenuitem.id === undefined){
            MenuService.addMenuItem($scope.newmenuitem);    
        } else {
            MenuService.updateMenuItem($scope.newmenuitem);
        }
        
        $scope.newmenuitem = {};
    }
    
    $scope.remove = function(menuId, index){
        MenuService.deleteMenuItem(menuId, index);
    }
    
    $scope.edit = function(menuitem) {
        $scope.newmenuitem = angular.copy(menuitem);
    }
})

//ctrlModule.controller("OrderController", function($scope, vorders) {
ctrlModule.controller("OrderController", function($scope, OrderService) {
    console.log("inside Order Controller Function");
    
//    $scope.orderitems = vorders;
    $scope.orderitems = OrderService.getOrderedItems();
    
    $scope.removeItem = function(index) {
        OrderService.deleteOrderedItem(index);
    }
    
    $scope.totalAmount = function() {
       return OrderService.getTotalAmount();
    }
})

ctrlModule.controller("LoginController", function($scope, $location, $rootScope){
    console.log("inside Login Controller Function");
    $rootScope.isLogin = false;
    $scope.doLogin = function(){
        if($scope.login.username === "admin")
            {
                $rootScope.isLogin = true;
                $location.path("/manageitems")    
            } else {
                $location.path("/error")
            }
    }
    
})

ctrlModule.controller("SignupController", function($scope){
    console.log("inside SignupController Function")
    
    $scope.stateList = [
        {"stateId":1, "stateName":'Karnataka'},
        {"stateId":2, "stateName":'MadyaPradesh'}
    ]
    
    $scope.$watch('user.state', function(newValue, oldValue){
        console.log("Old Value : "+oldValue);
        console.log("New Value : "+newValue);
        
        if(newValue === 1) {
            $scope.cityList = [
                {"cityId":101, "Name": "Bangalore"},
                {"cityId":102, "Name": "Tumkur"},
                {"cityId":102, "Name": "Mysore"}
            ]
        } else if(newValue === 2) {
            $scope.cityList = [
                {"cityId":101, "Name": "Indore"}
            ]
        }
    })
    
})