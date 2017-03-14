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
ctrlModule.controller("MainController", function($scope) {
    console.log("This is Main Controller Function");
    $scope.pageHeading = "<u>Restaurant Application</u>";
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