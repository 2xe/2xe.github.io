const fs = require('fs');
const EventEmitter = require('events');

class Logs extends EventEmitter {

	logServerRequest(request) {

		let data = JSON.stringify(request);
	
		// save to file
		fs.appendFile('./logs/requests.json', data+'\n', function error() {
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