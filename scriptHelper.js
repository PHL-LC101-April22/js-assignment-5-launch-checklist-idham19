// // Write your helper functions here!
require('isomorphic-fetch');
const pilot=document.querySelector('input[name="pilotName"]')
const copilot=document.querySelector('input[name="copilotName"]')
const fuelLevel=document.querySelector('input[name="fuelLevel"]')
const cargoLevel=document.querySelector('input[name="cargoMass"]')
const launchStatusUpdate=document.getElementById('launchStatus')
const faultyItems = document.getElementById('faultyItems')
const cargoStatusUpdate=document.getElementById('cargoStatus')
const fuelStatus =document.getElementById("fuelStatus")
const form =document.querySelector('form')


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget =document.getElementById("missionTarget")
 
   missionTarget.innerHTML=`
   
   <h2>Mission Destination</h2>
   <ol>
   <li>Name: ${name}</li>
   <li>Diameter: ${diameter}</li>
   <li>Star: ${star}</li>
   <li>Distance from Earth:${distance} </li>
   <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   
   `
}

function validateInput(testInput) {
    if(isNaN(testInput)){
  return alert(' Make sure to enter valid information for each field')
}
// else if (typeof(testInput)!=='string' && (testInput==pilot.value || testInput ==copilot.value)){
//     return alert (' Make sure to enter valid information for each field')
// }
   
}


function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
pilot=document.querySelector('input[name="pilotName"]')
copilot=document.querySelector('input[name="copilotName"]')
fuelLevel=document.querySelector('input[name="fuelLevel"]')
cargoLevel=document.querySelector('input[name="cargoMass"]')


form.addEventListener('submit',(e)=>{
    if(pilot.value===''|| copilot.value===''|| fuelLevel.value===''|| cargoLevel.value===''){
        return alert('all field are required') 
    }
    validateInput(fuelLevel.value)
    validateInput(cargoLevel.value)
    
    if(fuelLevel.value<10000){
        faultyItems.style.visibility ="visible" 
        fuelStatus.innerHTML='there is not enough fuel for the journey '
        launchStatusUpdate.innerHTML= "Shuttle not ready for launch "
        launchStatusUpdate.style ="color: red"
        
    }
    else if (cargoLevel.value> 10000){
        faultyItems.style.visibility='visible'
        cargoStatusUpdate.innerHTML ='Too much mass for the shuttle to take off'
        launchStatusUpdate.innerHTML= "Shuttle not ready for launch "
        launchStatusUpdate.style ="color: red"}
        else {
            launchStatusUpdate.innerHTML='Shuttle is ready for launch'
            launchStatusUpdate.style ="color: green"
        }
        e.preventDefault()
        
 })


}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then((response=>( response.json())))
    return planetsReturned;
}



function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*6)]
 
}


// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
