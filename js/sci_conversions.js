/*

	Electrical conversion formulas

*/

// Watts = Amps x Volts
function calcWatts(volts, amps) { return volts*amps; }

// Amps = Watts / Volts
function calcAmps(watts,volts) { return watts/volts; }

// Volts = Watts / Amps
function calcVolts(watts,amps) { return watts/amps; }


// watts
// W = V (joules per second per coulomb) x A (coulombs per second)
// W is watts, V is volts, and A is amperes of current.
// A 60-watt light bulb uses 60 joules per second.
// the wattage of the lightbulb is the product of calcWatts(volts, amps)

console.log("watts: " + calcWatts(100, 100))
console.log("amps: " + calcAmps(100, 100))
console.log("volts: " + calcVolts(100, 100))
