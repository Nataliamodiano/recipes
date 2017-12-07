app.controller("recipeController", function($scope, recipeService) {
  
  // set search inputs to null
  $scope.search = null;
  $scope.allowedIngredients = null;
  
  // set allergies to false
  $scope.dairy = false;
  $scope.eggs = false;
  $scope.gluten = false;
  $scope.peanut = false;
  $scope.seafood = false;
  $scope.sesame = false;
  $scope.soy = false;
  $scope.sulfite = false;
  $scope.treeNut = false;
  $scope.wheat = false;
  
  // set diet to false
  $scope.pescetarian = false;
  $scope.vegan = false;
  $scope.vegetarian = false;
  $scope.paleo = false;
  
  // set cuising to false
  $scope.american = false;
  $scope.italian = false;
  $scope.asian = false;
  $scope.mexican = false;
  $scope.southern = false;
  $scope.barbecue = false;
  $scope.indian = false;
  $scope.mediterranean = false;
  $scope.moroccan = false;
  $scope.hawaiian = false;

  // change class of clicked ingredient in view
  $scope.ingredientClicked = false;

  // search recipes --> recipeService 
  $scope.searchRecipes = function() {
    recipeService.searchRecipes($scope.search, $scope.allowedIngredients, $scope.dairy, $scope.eggs, $scope.gluten, $scope.peanut, $scope.seafood, $scope.sesame, $scope.soy, $scope.sulfite, $scope.treeNut, $scope.wheat, $scope.pescetarian, $scope.vegan, $scope.vegetarian, $scope.paleo, $scope.american, $scope.italian, $scope.asian, $scope.mexican, $scope.southern, $scope.barbecue, $scope.indian, $scope.mediterranean, $scope.moroccan, $scope.hawaiian)
      .then(function(response) {
        // get response data from yummly
        $scope.recipes = response.data.matches;
        // clear search fields after find recipes is clicked
        $scope.search = '';
        $scope.allowedIngredients = '';
        // if response data array is empty alert the user to try a new search
        if ($scope.recipes.length == 0) {
          alert("Oops try a new seach!");
        }
      }, function(error) {
        console.log(error);
      })
  }

  // get additional recipe info by id -- second api call in recipeService
  $scope.getRecipe = function(recipe) {
    recipeService.getRecipe(recipe.id)
      .then(function(response) {
        // second api call to get more information about the clicked recipe
        $scope.clickedRecipe = response.data;

        // click save recipe to save clicked recipe to my recipes 
        $scope.saveToMyRecipes = function(savedRecipe) {
          savedRecipe = $scope.clickedRecipe;
          recipeService.saveToMyRecipes(savedRecipe);
        }

      }, function(error) {
        console.log(error);
      })
  }

})
