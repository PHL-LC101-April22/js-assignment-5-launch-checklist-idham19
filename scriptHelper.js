// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget =document.getElementById("missionTarget")
   missionTarget.innerHTML=`
   
   <h2>Mission Destination</h2>
   <ol>
   <li>Name: ${pickPlanet()}</li>
   <li>Diameter: </li>
   <li>Star: ${star}</li>
   <li>Distance from Earth: </li>
   <li>Number of Moons: </li>
   </ol>
   <img src="">
   
   `
}

function validateInput(testInput) {
    if( testInput ="" ){
      return alert ('all field are required') 
    }
else if(isNaN(testInput)&& (testInput ===fuelLevel.value  ||testInput=== cargoLevel.value)){
    return alert (' Make sure to enter valid information for each field')
}
else if (testInput!=='string' && (testInput==pilot.value || testInput ==copilot.value)){
    return alert (' Make sure to enter valid information for each field')
}
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
pilot=document.querySelector('input[name="pilotName"]')
copilot=document.querySelector('input[name="copilotName"]')
fuelLevel=document.querySelector('input[name="fuelLevel"]')
cargoLevel=document.querySelector('input[name="cargoMass"]')
const launchStatusUpdate=document.getElementById('launchStatus')
const faultyItems = document.getElementById('faultyItems')
const cargoStatusUpdate=document.getElementById('cargoStatus')
const form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
e.preventDefault()

validateInput(fuelLevel.value)
validateInput(cargoLevel.value)
validateInput(pilot.value)
validateInput(copilot.value)

})
if(fuelLevel.value<10000){
faultyItems.style.display ="visible" 
launchStatusUpdate.innerHTML= "Shuttle not ready for launch "
launchStatusUpdate.style ="color: red"
}
else if (cargoLevel> 10000){
    faultyItems.style.display='visible'
    cargoStatusUpdate.innerHTML ='Too much mass for the shuttle to take off'
    launchStatusUpdate.innerHTML= "Shuttle not ready for launch "
    launchStatusUpdate.style ="color: red"
}else {
    launchStatusUpdate.innerHTML='Shuttle is ready for launch'
    launchStatusUpdate.style ="color: green"
}

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then((response=>console.log( response.json())))

    return planetsReturned;
}


function pickPlanet(planets) {
    planets=myFetch()
    return planets
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
