app.service("groceryService", function() {  
  
  //set saved grocery array
  var _savedGroceryArray = [];
  
  //add grocery to front of array 
  this.addToGroceryPage = function(item) {
    _savedGroceryArray.unshift(item);
  }

  // return saved grocery array to groceryController
  this.getSavedGroceries = function() {
    return _savedGroceryArray;
  }

  // add my own grocery item to list. if list is entered, separate by commas and unshift the array with each item in the array
  this.addCustomGrocery = function(groceryInput) {
    var array = groceryInput.split(",");
    for(var i = 0; i < array.length; i++) {
      _savedGroceryArray.unshift(array[i]);
    }
  }

  // delete grocery item from array 
  this.deleteGroceryItem = function(savedGrocery) {
    for (var i = 0; i < _savedGroceryArray.length; i++) {
      if(_savedGroceryArray.indexOf(savedGrocery) == i) {
        _savedGroceryArray.splice(i, 1);
      }
    }
  }
  
})