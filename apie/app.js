const express = require('express');
const http = require('http');
const Logs = require('./modules/logs.js');
const log = new Logs();

var app = new express();

//app.use('./routes/main.js');
//app.use('./modules/log.js');


var server = http.createServer(function(request, response){
	let data = '';
	request.on('data', chunk => {
	  data += chunk;
	})
	request.on('end', () => {
	  console.log(JSON.parse(data).todo); // 'Buy the milk'
	  response.end();
	});

	// log requests
	console.log('Request is being logged');
	
	log.on('logServerRequest', function(args){
		console.log(args);
	});

	log.logServerRequest(request);

	// use routes
});

server.listen(3000);