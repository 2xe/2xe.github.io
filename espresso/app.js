// native modules

// Events
const EventEmitter = require('events');

// HTTP
const http = require('http');

// express
const express = require('express');
const app = express();

/*
const server = http.createServer(function(req, res){

    if (req.url === '/') {
 	res.write('Hello World');
 	res.end();
 }

 if (req.url === '/api/courses') {
 	res.write(JSON.stringify([1, 2, 3]));
 	res.end();
 }
 // GET
 // POST 
 // PUT
 // DELETE

});*/

// data
var data = {
    "recipes": [
                {
                    "id": 1,
                    "name": "Secret Arcaffe brew",
                    "Weight": "16g",
                    "Ratio": "1:2",
                    "Cup": "32g",
                    "Time": "26s",
                    "Temperature": "93°C 199.4°F /  366.15K",

                    "Grind size":"14",
                    "Grind time":"16s",
                    "Grinder":"Rocket Super Fausto",
                    "Type":"75mm Flat burrs",

                    "Bean":"Arcaffe Mokacrema",
                    "Type":"Whole beans",
                    "Variety":"Arabica 100%",
                    "Roast":"Medium",
                    "Origin":"Brasilien, El Salvador, Etiopien, Guatemala",

                    "Machine":"Rocket Appartamento",
                    "Filter":"Bottomless portafilter, 58mm",
                    "Tamper":"Rocket tamper"
                },
                {
                    "id": 2,
                    "name": "Secret Arcaffe brew 2",
                    "Weight": "16g",
                    "Ratio": "1:2",
                    "Cup": "32g",
                    "Time": "26s",
                    "Temperature": "93°C 199.4°F /  366.15K",

                    "Grind size":"14",
                    "Grind time":"16s",
                    "Grinder":"Rocket Super Fausto",
                    "Type":"75mm Flat burrs",

                    "Bean":"Arcaffe Mokacrema",
                    "Type":"Whole beans",
                    "Variety":"Arabica 100%",
                    "Roast":"Medium",
                    "Origin":"Brasilien, El Salvador, Etiopien, Guatemala",

                    "Machine":"Rocket Appartamento",
                    "Filter":"Bottomless portafilter, 58mm",
                    "Tamper":"Rocket tamper"
                },
        ]
}

app.get('/', function(req, res) {
    res.send('Connected...');
});

// all recipes
app.get('/api/recipe/', function(req, res) {
    // Return all
    var recipe = false;

    recipe = data.recipes;
    
    if (!recipe) {
        res.status(404).send('The recipe could not be found.')
    }

    res.send(recipe);
});

// specific recipe
app.get('/api/recipe/:id', function(req, res) {
    
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

//PORT
const port = process.env.PORT || 3000;

// On new connection / user visit
app.listen(port);
app.on('connection', function(socket){
	console.log('New connection...');
});

console.log(`Listening on port ${port}...`)

// custom modules
// use const to avoid redeclaration of the logger
const Logger = require('./log.js');
const log = new Logger();

// Register a listener
log.on('messageLogged', function(arg) {
	console.log('Listener called', arg);
});

//log.message('message');