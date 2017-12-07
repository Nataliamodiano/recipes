app.service("recipeService", function($http) {

  // pass scoped variables from controller into function for api query
  this.searchRecipes = function(search, allowedIngredients, dairy, eggs, gluten, peanut, seafood, sesame, soy, sulfite, treeNut, wheat, pescetarian, vegan, vegetarian, paleo, american, italian, asian, mexican, southern, barbecue, indian, mediterranean, moroccan, hawaiian) {
    console.log("request made");

    // if search is empty, feed the api query an empty search string 
    if (search == '' || search == undefined || search == null) {
      search = '';
    } 
    else {
      console.log("search made");
    }

    // if allowed ingredients is empty, feed the api query an empty search string
    if (allowedIngredients == '' || allowedIngredients == undefined || allowedIngredients == null) {
      allowedIngredients = '';
    } 
    else {
      // if populated, split search by , and loop through each item in the array, add the allowed ingredient query string to the front, and replace all spaces with plus signs. Join array 
      allowIngredients = function(allowedIngredient) {
        var array = allowedIngredient.split(", ");
        for(var i = 0; i < array.length; i++) {
          array[i] = "&allowedIngredient[]=" + array[i].replace(/ /g, '+');
        }
        var allowedIngredients = array.join("");
      }
      allowIngredients(allowedIngredients);
    }

    // check to see which allergies are false.. if so input empty sting into query string, if not add proper query string into api call
    if (dairy == false) {
      dairy = '';
    } 
    else {
      dairy = '&allowedAllergy[]=396^Dairy-Free';
    }
    if (eggs == false) {
      eggs = '';
    } 
    else {
      eggs = '&allowedAllergy[]=397^Egg-Free';
    }
    if (gluten == false) {
      gluten = '';
    } 
    else {
      gluten = '&allowedAllergy[]=393^Gluten-Free';
    }
    if (peanut == false) {
      peanut = '';
    } 
    else {
      peanut = '&allowedAllergy[]=394^Peanut-Free';
    }
    if (seafood == false) {
      seafood = '';
    } 
    else {
      seafood = '&allowedAllergy[]=398^Seafood-Free';
    }
    if (sesame == false) {
      sesame = '';
    } 
    else {
      sesame = '&allowedAllergy[]=399^Sesame-Free';
    }
    if (soy == false) {
      soy = '';
    } 
    else {
      soy = '&allowedAllergy[]=400^Soy-Free';
    }
    if (sulfite == false) {
      sulfite = '';
    } 
    else {
      sulfite = '&allowedAllergy[]=401^Sulfite-Free';
    }
    if (treeNut == false) {
      treeNut = '';
    } 
    else {
      treeNut = '&allowedAllergy[]=395^Tree Nut-Free';
    }
    if (wheat == false) {
      wheat = '';
    } 
    else {
      wheat = '&allowedAllergy[]=392^Wheat-Free';
    }
    if (pescetarian == false) {
      pescetarian = '';
    } 
    else {
      pescetarian = '&allowedDiet[]=390^Pescetarian';
    }
    if (vegan == false) {
      vegan = '';
    } 
    else {
      vegan = '&allowedDiet[]=386^Vegan';
    }
    if (vegetarian == false) {
      vegetarian = '';
    } 
    else {
      vegetarian = '&allowedDiet[]=387^Lacto-ovo vegetarian';
    }
    if (paleo == false) {
      paleo = '';
    } 
    else {
      paleo = '&allowedDiet[]=403^Paleo';
    }
    if (american == false) {
      american = '';
    } 
    else {
      american = '&allowedCuisine[]=cuisine^cuisine-american';
    }
    if (italian == false) {
      italian = '';
    } 
    else {
      italian = '&allowedCuisine[]=cuisine^cuisine-italian';
    }
    if (asian == false) {
      asian = '';
    } 
    else {
      asian = '&allowedCuisine[]=cuisine^cuisine-asian';
    }
    if (mexican == false) {
      mexican = '';
    } 
    else {
      mexican = '&allowedCuisine[]=cuisine^cuisine-mexican';
    }
    if (southern == false) {
      southern = '';
    } 
    else {
      southern = '&allowedCuisine[]=cuisine^cuisine-southern';
    }
    if (barbecue == false) {
      barbecue = '';
    } 
    else {
      barbecue = '&allowedCuisine[]=cuisine^cuisine-barbecue-bbq';
    }
    if (indian == false) {
      indian = '';
    } 
    else {
      indian = '&allowedCuisine[]=cuisine^cuisine-indian';
    }
    if (mediterranean == false) {
      mediterranean = '';
    } 
    else {
      mediterranean = '&allowedCuisine[]=cuisine^cuisine-mediterranean';
    }
    if (moroccan == false) {
      moroccan = '';
    } 
    else {
      moroccan = '&allowedCuisine[]=cuisine^cuisine-moroccan';
    }
    if (hawaiian == false) {
      hawaiian = '';
    } 
    else {
      hawaiian = '&allowedCuisine[]=cuisine^cuisine-hawaiian';
    }
    
    // return http request to .then in recipeController. only pull items with images
    return $http.get("https://api.yummly.com/v1/api/recipes?_app_id=412c0f8e&_app_key=d7b204b4c9d32122741741c95b932ac5&q=" + search + allowedIngredients + dairy + eggs + gluten + peanut + seafood + sesame + soy + sulfite + treeNut + wheat + pescetarian + vegan + vegetarian + paleo + american + italian + asian + mexican + southern + barbecue + indian + mediterranean + moroccan + hawaiian + "&requirePictures=true");
  }

  // get additional recipe info by id from api and return to recipeController
  this.getRecipe = function(id) {
    return $http.get("http://api.yummly.com/v1/api/recipe/" + id + "?_app_id=412c0f8e&_app_key=d7b204b4c9d32122741741c95b932ac5&q=");
  }

  // set saved recipe array 
  var _savedRecipesArray = [];

  //add saved recipe to array 
  this.saveToMyRecipes = function(savedRecipe) {
    _savedRecipesArray.unshift(savedRecipe);
  }

  // return saved recipe to myRecipeController
  this.getSavedRecipes = function() {
    return _savedRecipesArray;
  }

  // delete saved recipe by id from myRecipeController
  this.deleteMyRecipe = function(savedRecipe) {
    for (var i = 0; i < _savedRecipesArray.length; i++) {
      if (_savedRecipesArray[i].id == savedRecipe.id) {
        _savedRecipesArray.splice(i, 1);
      }
    }
  }

  // set notes of clicked recipe when save recipe notes button is clicked 
  this.saveRecipeNotes = function(clickedRecipe, notes) {
    for (var i = 0; i < _savedRecipesArray.length; i++) {
      if (_savedRecipesArray[i].id == clickedRecipe.id) {
        clickedRecipe.notes = notes;
        _savedRecipesArray.splice(i, 1, clickedRecipe);
      }
    }
  }

})