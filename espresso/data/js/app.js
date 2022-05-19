// native modules

// path 
const path = require('path');

// Operation System
const os = require('os');

// File system
const fs = require('fs');

// Events
const EventEmitter = require('events');

// HTTP
const http = require('http');

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
 get('/', function(req, res){

 });
 // POST 
 // PUT
 // DELETE

});

server.listen(3000);
server.on('connection', function(socket){
	console.log('New connection...');
});

console.log('Listening on port 3000...')
console.log('Updated...')

// custom modules
// use const to avoid redeclaration of the logger
const Logger = require('./log.js');
const log = new Logger();

// Register a listener
log.on('messageLogged', function(arg) {
	console.log('Listener called', arg);
});

//log.message('message');