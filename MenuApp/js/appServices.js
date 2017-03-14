var appServices = angular.module("ServiceModule", ['FactoryModule']);

appServices.service('MenuService', function(MenuFactory){
    this.getAllMenuItems = function(){
        return MenuFactory.getMenuItems();
    }
    
    this.addMenuItem = function(newmenuitem) {
        MenuFactory.addMenuItem(newmenuitem);
    }
    
    this.deleteMenuItem = function(menuId, index) {
        MenuFactory.deleteMenuItem(menuId, index);
    }
    
    this.updateMenuItem = function(menuItem) {
        MenuFactory.updateMenuItem(menuItem);
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