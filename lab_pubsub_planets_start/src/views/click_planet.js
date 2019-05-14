const PubSub = require('../helpers/pub_sub.js')

const ClickPlanet = function(anchor){
  this.anchor = anchor;
};

ClickPlanet.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
    const nameOfPlanet = event.detail;
    this.assignPlanetByName(nameOfPlanet);

  this.anchor.addEventListener('click', (event) => {
    console.log(event.target.id)
    const chosenPlanet = event.target.id
    PubSub.publish('ClickPlanet:select-planet', chosenPlanet);
  })

  })
}

ClickPlanet.prototype.assignPlanetByName = function(arrayOfPlanets){
  arrayOfPlanets.forEach((planet) => {
    let planetName = planet.name
    const anchorPlanet = document.querySelector(`#${planetName}`)
    // anchorPlanet.addEventListener('click', handleClickAnchorPlanet);
  })
}

// const handleClickAnchorPlanet = function(){
//   PubSub.publish('Planet:selected-planet',  )
// }




module.exports = ClickPlanet;
