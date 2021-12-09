var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
    res.send('Connected...');
});

// all recipes
router.get('/api/recipe/', function(req, res) {
    // Return all
    var recipe = false;

    recipe = data.recipes;
    
    if (!recipe) {
        res.status(404).send('The recipe could not be found.')
    }

    res.send(recipe);
});

// specific recipe
router.get('/api/recipe/:id', function(req, res) {
    
    var recipe = false;

    for (var i = data.recipes.length - 1; i >= 0; i--) {
        if (data.recipes[i].id == req.params.id) {
            recipe = data.recipes[i];
        }
    }
    
    if (!recipe) {
        res.status(404).send('The recipe could not be found.')
    }

    res.send(recipe);
    // query params stored like = req.query
});

module.exports = router; 