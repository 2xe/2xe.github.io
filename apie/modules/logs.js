const fs = require('fs');
const EventEmitter = require('events');

class Logs extends EventEmitter {

	logServerRequest(request) {

		let content = request.toString();	

		let data = JSON.stringify(content);
	
		// save to file
		fs.writeFile('./logs/requests.json', data, function error() {
			if (error) {
				console.log(data);
				return;
			}
		});

		// raise event
		this.emit('logServerRequest', 'logged: '+data);
	}
}

module.exports = Logs; 