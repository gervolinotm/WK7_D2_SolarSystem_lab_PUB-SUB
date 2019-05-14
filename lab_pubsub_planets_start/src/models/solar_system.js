const PubSub = require('../helpers/pub_sub.js')
const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe('ClickPlanet:click-planet', (event) => {
    const planetName = event.detail;
    this.displayPlanetDetail(planetName)
  })
};

SolarSystem.prototype.displayPlanetDetail = function(planetName){
  this.planets.forEach((planet) => {
    if(planet.name === planetName){
      return planet;
    }
    PubSub.publish('SolarSystem:planet-detail', planet);
  })
}

module.exports = SolarSystem;
