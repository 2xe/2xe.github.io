
// Events
const EventEmitter = require('events');

// not used yet
var url ="http://2xe.github.io/espresso/log";

class Log extends EventEmitter {

	message(text) {
		console.log(text);
		// Raise an event
		this.emit('messageLogged', { id: 1, url:'https://' });

	}
}

// add to the global object
module.exports = Log;