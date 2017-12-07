app.controller("myRecipesController", function($scope, recipeService, groceryService) {
  
  // scope saved recipe array from recipeService
  $scope.savedRecipesArray = recipeService.getSavedRecipes();

  // view clicked recipe in modal
  $scope.getRecipe = function(savedRecipe) {
    $scope.clickedRecipe = savedRecipe;
  }

  // delete saved recipe
  $scope.deleteMyRecipe = function(savedRecipe) {
    recipeService.deleteMyRecipe(savedRecipe);
  }
  
  // toggle add/hide notes button
  $scope.notesButton = true;
  $scope.$watch('notesButton', function(){
    $scope.toggleNotes = $scope.notesButton ? 'Add/View Notes' : 'Hide Notes';
  })

  // save recipe notes - get notes from view
  $scope.saveRecipeNotes = function(clickedRecipe, notes) {
    recipeService.saveRecipeNotes(clickedRecipe, $scope.clickedRecipe.notes);
  }

  // add grocery item to groceryService
  $scope.addToGroceryPage = function(item) {
    savedIngredient = item;
    groceryService.addToGroceryPage(savedIngredient);
  }
  
})