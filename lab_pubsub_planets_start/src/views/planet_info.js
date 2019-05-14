const PubSub = require('../helpers/pub_sub.js')

const PlanetInfo = function(container){
  this.container = container;
}

PlanetInfo.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet-detail', (event) => {
    const planetDetail = event.detail;
    this.displayPlanetDetail(planetDetail);
  })
}

// PlanetInfo.prototype.displayPlanetDetail = function(planetDetail) => {
//   console.log(event);
// }



module.exports = PlanetInfo;
