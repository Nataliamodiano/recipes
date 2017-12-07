var app = angular.module("recipesApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("index", { /// home - search for recipes or display top rated recipes if user hasnt searched yet
      url: "/",
      templateUrl: "./views/home.html",
      controller: "recipeController"
    })

    // recipes
    .state("recipes", { /// my saved list of recipes
      url: "/recipes",
      templateUrl: "./views/recipes.html",
      controller: "myRecipesController"
    })
    
    // groceries
    .state("groceries", { /// my saved list of grocerys
      url: "/groceries",
      templateUrl: "./views/groceries.html",
      controller: "groceryController"
    })
    
})