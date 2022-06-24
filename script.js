// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let listedPlanets;
    let pickedPlanet
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse= myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets)
    
    }).then(function () {
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickedPlanet= pickPlanet(listedPlanets)
       console.log(pickedPlanet)
       
        addDestinationInfo(document,pickedPlanet.name,pickedPlanet.diameter,pickedPlanet.star,pickedPlanet.distance,pickedPlanet.moons,pickedPlanet.image)
    })
    formSubmission(document,pilot,copilot,fuelLevel,cargoLevel)
 
});