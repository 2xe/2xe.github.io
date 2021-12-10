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
var data = require('./data/data.js');

// Routes
app.use(express.static('public'));
app.use(require('./js/routes.js')); // api structure

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
const Logger = require('./js/log.js');
const log = new Logger();

// Register a listener
log.on('messageLogged', function(arg) {
	console.log('Listener called', arg);
});

//log.message('message');