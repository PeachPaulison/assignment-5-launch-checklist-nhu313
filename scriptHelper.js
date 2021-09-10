// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
	// get the missionTarget div


	// set the inner HTML to this
  let missionTarget = document.getElementById("missionTarget");

	missionTarget.innerHTML =
		// fill in the information that is passed in
		// Here is the HTML formatting for our mission target div.

		`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
	//check if the test Input is empty
	// if it is, return 'Empty'
	// check if it's not a number isNaN
	// return 'Not a Number'
	// else
	// return 'Is a Number'
	if (testInput === 'Empty') {
		return 'Empty';
	} else if (isNaN(Number(testInput))) {
		return 'Not a Number';
	} else {
		return 'Is a Number';
	}
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
	// check if any of the values are empty
	// if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
	// alert user that they need to fill out all the fields alert('message')
	// check if fuelLevelValue and cargoLevelValue are not numbers
	// alert the user that must enter valid input
	if (
		validateInput(pilot) === 'Empty' ||
		validateInput(copilot) === 'Empty' ||
		validateInput(fuelLevel) === 'Empty' ||
		validateInput(cargoLevel) === 'Empty'
	) {
		alert('Please complete all of the fields.');
	}
	if (validateInput(fuelLevel) === NaN || validateInput(cargoLevel) === NaN) {
		alert('Please enter a valid number.');
	}

	// set the list.style.visibility = 'visible'
	// get the pilot status, update the inner HTML to say ` ${pilotValue} is ready for launch`
	// get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
	list.style.visibility = 'visible';
	document.getElementByID('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready for launch!`;
	document.getElementByID('copilotStatus').innerHTML = `Copilot ${copilot.value} is ready for launch!`;

	// check if the fuel level is less 10,000
	// change launchStatus to "Shuttle not ready for launch", and color to red
	// change the fuelStatus to "Fuel level too low for launch"

	if (fuelLevel < 10000) {
		list.style.visibility = 'visible';
		document.getElementByID('launchStatus').innerHTML = `Shuttle not ready for launch!`;
		document.getElementByID('launchStatus').style.color = 'red';
		document.getElementByID('fuelStatus').innerHTML = `Fuel level too low for launch!`;

		// check if the cargo level is more than 10,000
		// change launchStatus to "Shuttle not ready for launch", and color to red
		// change the cargoStatus to "Cargo level too high for launch"
	} else if (cargoLevel > 10000) {
		list.style.visibility = 'visible';
		document.getElementByID('launchStatus').innerHTML = `Shuttle not ready for launch!`;
		document.getElementByID('launchStatus').style.color = 'red';
		document.getElementByID('cargoStatus').innerHTML = `Cargo level too high for launch!`;

		// if both fuel and cargo are good
		// change the launchStatus to "Shuttle is Ready for Launch" and color to green
	} else {
		document.getElementByID('launchStatus').innerHTML = `Shuttle is ready for launch!`;
		document.getElementByID('launchStatus').style.color = 'green';
	}
}

async function myFetch() {
	let planetsReturned;

	planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(
		response
	) {
		return response.json();
		// get the json from the response
	});

	return planetsReturned;
}

function pickPlanet(planets) {
	// randomly pick a planet from the array
	// Math random for index  
	let index = Math.floor(Math.random() * planets.length);
	return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
