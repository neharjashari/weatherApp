const request = require('request');

// const url =
// 	'https://api.darksky.net/forecast/3dc03029d54fe051da0f01bed84fecba/37.8267,-122.4233?units=si';

// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Unable to find the location!');
// 	} else {
// 		const temperature = response.body.currently.temperature;
// 		const precipProbability = response.body.currently.precipProbability;

// 		console.log(
// 			response.body.daily.data[0].summary +
// 				' It is currently ' +
// 				temperature +
// 				' degrees out. There is a ' +
// 				precipProbability +
// 				'% chance of rain.'
// 		);
// 	}
// });

// const geocodeURL =
// 	'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmVoYXJqYXNoYXJpIiwiYSI6ImNrM3g4MnpjNzB4Z2MzbnRkMDlvejd6em8ifQ.fDHqTLuUwgiUirlsWLgqXA';

// request({ url: geocodeURL, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to location services!');
// 	} else if (response.body.features.length === 0) {
// 		console.log('Unable to find the location. Try another search.');
// 	} else {
// 		const latitude = response.body.features[0].center[1];
// 		const longitude = response.body.features[0].center[0];

// 		console.log(latitude, longitude);
// 	}
// });

const geocode = (address, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		address +
		'.json?access_token=pk.eyJ1IjoibmVoYXJqYXNoYXJpIiwiYSI6ImNrM3g4MnpjNzB4Z2MzbnRkMDlvejd6em8ifQ.fDHqTLuUwgiUirlsWLgqXA';
};

geocode('Philadelphia', (error, data) => {});
