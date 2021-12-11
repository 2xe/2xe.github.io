const express = require('express');
const router = express.Router();


router.get('/', function(request, response) {
    response.send('Connected...');
});

// all recipes
router.get('/api/recipe/', function(request, response) {
    // Return all
    var recipe = false;

    recipe = data.recipes;
    
    if (!recipe) {
        response.status(404).send('The recipe could not be found.')
    }

    response.send(recipe);
});

// specific recipe
router.get('/api/recipe/:id', function(request, response) {
    
    var recipe = false;

    for (var i = data.recipes.length - 1; i >= 0; i--) {
        if (data.recipes[i].id == request.params.id) {
            recipe = data.recipes[i];
        }
    }
    
    if (!recipe) {
        response.status(404).send('The recipe could not be found.')
    }

    response.send(recipe);
    // query params stored like = req.query
});

router.post('/api/machine/', function(request, response) {
    const test = request.body;
    const machine = {
        id: 1,
        brand: request.body.brand,
        model: request.body.model
        /*"pressure_profile_system": "Yes",
        "pid_pressure_control": "Yes",
        "shot_timer": "Yes",
        "boilers": [
                    {"id": 1, "outlet": "steamer", "capacity": "1.9"}, // capacity L
                    {"id": 2, "outlet": "brewer", "capacity": "3.6"} // capacity L
                ],
        "total_boiler_capacity": "5.5",
        "water_feed": "Hard plumbing", // Reservoir / Hard plumbing
        "wattage": "220-240V; 50/60Hz; 1600W",
        "width": "420", //mm
        "depth": "505", //mm
        "height": "645", //mm
        "weight": "42.4", // kg*/
    };
    //data.machines.push(machine);
    response.send(machine);
});

module.exports = router; 