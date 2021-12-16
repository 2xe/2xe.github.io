const express = require('express');
const http = require('http');
const fs = require('fs');

const Logs = require('./modules/logs.js');
const log = new Logs();

var app = new express();

//app.use('./routes/main.js');
//app.use('./modules/log.js');

var port = 3000;
var server = http.createServer(function(request, response){
	
	const { method, url, headers, rawHeaders } = request;
	let body = [];
	
	request.on('error', function(err) {
		console.error(err);
	});
	request.on('data', function(chunk){
		body.push(chunk);
	});
	
	request.on('end', function() {

		body = Buffer.concat(body).toString();
	    
	    // At this point, we have the headers, method, url and body, and can now
	    // do whatever we need to in order to respond to this request.
	    
	    log.on('logServerRequest', function(args){
	    	// logging to json file
		});

		log.logServerRequest(headers); // log headers to file

		console.log('test'+body);

		// write out
		response.writeHead(200, {'content-type': 'text/html'});
		
		fs.readFile('index.html', function(error, data) {
			if (error) {
				response.writeHead(404);
				response.write("File not found");
			}
			else {
				response.write(data);
			}

			response.end();
		});

	});

});

server.listen(port, function(error){
	if (error) {
		console.log(error);
	} else {
		console.log('server is listening to port: '+port);
	}
});