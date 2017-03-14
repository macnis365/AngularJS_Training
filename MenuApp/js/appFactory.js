var factoryVar = angular.module("FactoryModule", []);

factoryVar.factory("MenuFactory", function(){
    var menuitems = [
        {"code": "VG01", "name": "Sandwich", "price": 120, "description":"Veg Sandwich"},
        {"code": "VG02", "name": "Chicken Sandwich", "price": 220, "description":"Non-Veg Sandwich"},
        {"code": "VG03", "name": "Chesse Sandwich", "price": 320, "description":"Burger Sandwich"},
        {"code": "VG04", "name": "Sandwich", "price": 420, "description":"Plain Sandwich"},
    ]
    
    return {
        getMenuItems: function(){
            return menuitems;
        }
    }
})

factoryVar.factory("OrderFactory", function(){
    var orderedItems = [];
    
    return {
        getOrderedItems: function() {
        return orderedItems;
        },
        addOrderedItem: function(item) {
            orderedItems.push(item);
        },
        deleteOrderedItem: function(index) {
            orderedItems.splice(index, 1);
        }
    }
})