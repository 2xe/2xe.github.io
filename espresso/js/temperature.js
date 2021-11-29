/*
Convert Kelvin, Fahrenheit and Celsius
*/

function celsiusToFahrenheit(c) {
	return (c × 9/5) + 32;
}

function celsiusToKelvin(c) {
	return c + 273.15;
}

function fahrenheitToCelsius(f) {
	return (f − 32) × 5/9;
}

function fahrenheitToKelvin(f) {
	return (f − 32) × 5/9 + 273.15;
}

function kelvinToFahrenheit(k) {
	return (k − 273.15) × 9/5 + 32;
}

function kelvinToCelsius(k) {
	return k − 273.15;
}