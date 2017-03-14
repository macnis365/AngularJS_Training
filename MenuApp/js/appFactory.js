var factoryVar = angular.module("FactoryModule", ['ngResource']);

factoryVar.factory("MenuFactory", function($resource){
/*    var menuitems = [
        {"code": "VG01", "name": "Sandwich", "price": 120, "description":"Veg Sandwich"},
        {"code": "VG02", "name": "Chicken Sandwich", "price": 220, "description":"Non-Veg Sandwich"},
        {"code": "VG03", "name": "Chesse Sandwich", "price": 320, "description":"Burger Sandwich"},
        {"code": "VG04", "name": "Sandwich", "price": 420, "description":"Plain Sandwich"},
    ]*/
    
    var menuitems = [];
    
    var menuResource = $resource("http://localhost:2403/wsmenuitems");
    
    
    
    return {
        getMenuItems: function(){
            menuitems = menuResource.query();
            return menuitems;
        },
        addMenuItem: function(newmenuitem){
            menuResource.save(newmenuitem, function(successResponse){
                console.log("Save Sucess");
                menuitems.push(successResponse);
            }, function(failureResponse){console.log("Save Failed")});
        },
        deleteMenuItem: function(menuId, index) {
            menuResource.remove({"id": menuId}, function(sucessResponse){
                console.log("Succesfully Removed ", sucessResponse);
                menuitems.splice(index, 1);
            }, function(failureResponse){
                console.log("Failed to Remove ", failureResponse);
            });
            
        },
        updateMenuItem: function(menuitem){
        menuResource.save(menuitem, function(sucessResponse){console.log("Successfully Updated");}, function(failureRespnse){console.log("Failed to Update");})
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