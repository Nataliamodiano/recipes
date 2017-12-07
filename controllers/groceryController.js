app.controller("groceryController", function($scope, groceryService) {

  // scope saved recipe array from service
  $scope.savedGroceryArray = groceryService.getSavedGroceries();
  
  // add input to list and empty grocery input 
  $scope.addCustomGrocery = function(groceryInput) {
    groceryService.addCustomGrocery(groceryInput);
    $scope.groceryInput = '';
  }

  // delete grocery item 
  $scope.deleteGroceryItem = function(savedGrocery) {
    groceryService.deleteGroceryItem(savedGrocery);
  }
  
})