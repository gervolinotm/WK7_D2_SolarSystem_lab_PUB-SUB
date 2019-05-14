const PubSub = require('../helpers/pub_sub.js')

const ClickPlanet = function(container){
  this.container = container;
};

ClickPlanet.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
    const nameOfPlanet = event.detail;
    this.assignPlanetByName(nameOfPlanet);
  })
}

ClickPlanet.prototype.assignPlanetByName = function(arrayOfPlanets){
  arrayOfPlanets.forEach((planet) => {
    let planetName = planet.name
    console.log(planetName)
  })
}




module.exports = ClickPlanet;
