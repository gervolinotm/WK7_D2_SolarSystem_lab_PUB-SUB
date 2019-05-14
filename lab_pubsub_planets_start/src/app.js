const planetsData = require('./data/planets.js');
const ClickPlanet = require('./views/click_planet.js');
const PlanetInfo = require('./views/planet_info.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectAnchor = document.querySelector('nav.planets-menu');
  const clickedPlanet = new ClickPlanet(selectAnchor);
  clickedPlanet.bindEvents();

  // const infoSection = document.querySelector('section.planet-details');
  // const displayPlanetInfo = new PlanetInfo(infoSection);
  // displayPlanetInfo.bindEvents();

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
});
