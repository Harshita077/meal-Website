<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

 
module.exports = router;
=======
const express=require('express');
const router=express.Router();
const recipeController=require('../controllers/recipeController');




router.get('/',recipeController.homepage);

module.exports=router;
>>>>>>> 40382d3b0b471bff4769d59b78ba05eaee0535c2
