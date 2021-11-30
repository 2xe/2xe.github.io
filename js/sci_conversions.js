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


/*
	ELECTROMAGNETICSM (electricity and magneticsm)
	B 		= Magnetic field
	
	-> / <- = vectors 			(Vectors have size and directions) a vectorfield is a field of vectors longer vectors represents higher speeds / larger values
	
	V 		= Divergence		(normally a triangle on its head) applies to vector fields. 
	V > 0 | energy entering the field, energy build up in the field
	V < 0 | energy leaving the field, energy loss in the field
	V = 0 | or both (the same energy)

*/

// Ampere's law 1820
// Curl B-> = J-> + aE->/at
// Curl in a magnetic field at some point = Electric current passing through that point + Or a changing electric field at that point


// Faraday's law 1831



// Gauss'es law 1835
/*
Div E-> = p
Divergence of an electric field at some point = the charge density at that same point
*/


// Maxwell equation 1860
// Heaviside - Maxwell-Heaviside equatiom 1885
/*
	Magnetic fields (B) ALWAYS have a divergence of 0
		Theres never less magnetic energy in the field
		Theres never more magnetic energy in the field
		The magnetic field energy stays the same

	Electric fields (E) can have divergence
		There can be energy build up in the field
		There can be energy loss in the field
		The field can stay the same

*/

/*
	CURVES
*/
// y = x
// base*height*0.5;

// y = x²
// to calculate the area of a curve we split the curve up into trapezoids
// dx = base length of the first trapez (alle baselengths are the same!)
// x1² = the height of the first trapez
// first area = dx*x1²
// total area example 1 = dx*x1² + dx*x2² + ... 
// total area example 2 = dx(x1² + x2² + ..)


/*
	TEMPERATURE conversions

	Convert Kelvin, Fahrenheit and Celsius can be converted interchangeably
*/

function celsiusToFahrenheit(c) {
	return (c * 9/5) + 32;
}

function celsiusToKelvin(c) {
	return c + 273.15;
}

function fahrenheitToCelsius(f) {
	return (f - 32) * 5/9;
}

function fahrenheitToKelvin(f) {
	return (f - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(k) {
	return (k - 273.15) * 9/5 + 32;
}

function kelvinToCelsius(k) {
	return k - 273.15;
}

/*
	GEOMETRY
*/

// Area of a triangle 
// Area = 0.5*base*height
function getAreaOfTriangle(base, height) {
	return base*height*0.5;
}


function getAreaOfSquare(sideLenght) {
	return sideLenght*sideLenght;
}
function getPerimeterOfSquare(sideLenght) {
	return 4*sideLenght;
}
function getSideLengthOfSquare(perimeter, area, diagonalLength) {
	if(perimeter) {
		return perimeter/4;
	}
	if(area) {
		return Math.sqrt(area);
	}
	if(diagonalLength) {
		return diagonalLength / Math.sqrt(2);
	}
}

function getAreaOfCircle(radius) {
	let pi = Math.PI;
	return pi*(radius*radius);
}
function getDiameterOfCircle(radius) {
	return 2*radius;
}
function getCircumferenceOfCircle(radius) {
	let pi = Math.PI;
	return 2*pi*radius;
}