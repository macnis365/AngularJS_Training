var appServices = angular.module("ServiceModule", ['FactoryModule']);

appServices.service('MenuService', function(MenuFactory){
    this.getAllMenuItems = function(){
        return MenuFactory.getMenuItems();
    }
})

appServices.service('OrderService', function(OrderFactory){
    this.getOrderedItems = function(){
        return OrderFactory.getOrderedItems();
    }
    
    this.addOrderedItems = function(item) {
        OrderFactory.addOrderedItem(item);
    }
    
    this.deleteOrderedItem = function(index) {
        OrderFactory.deleteOrderedItem(index);
    }
    
    this.getTotalAmount = function() {
         var total = 0;
        angular.forEach(OrderFactory.getOrderedItems(), function(item){
            total += (item.price*item.qty);
        })
        return total;
    }
})