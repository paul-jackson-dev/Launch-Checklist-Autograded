// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems")
        let pilotName = document.querySelector("input[name=pilotName]")
        let copilotName = document.querySelector("input[name=copilotName]")
        let fuelLevel = document.querySelector("input[name=fuelLevel]")
        let cargoMass = document.querySelector("input[name=cargoMass]")
        
        let alertText = ""
        if (validateInput(pilotName.value) !== "Not a Number"){ console.log(validateInput(pilotName.value));alertText += "Please enter a name for the pilot. \n" }
        if (validateInput(copilotName.value) !== "Not a Number"){ alertText += "Please enter a name for the copilot. \n" }
        if (validateInput(fuelLevel.value) !== "Is a Number"){ alertText += "Please enter a number for the fuel level. \n" }
        if (validateInput(cargoMass.value) !== "Is a Number"){ alertText += "Please enter a number for the cargo mass. \n" }
        if(alertText !== "") { alert(alertText) }
        else { formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value); }
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        // console.log(planet)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image) 

    })

 });