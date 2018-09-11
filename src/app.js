const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ClickView = require('./views/click_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const clickElement = document.querySelectorAll('.planet-menu-item');

  const clickView = new ClickView(clickElement);
  clickView.addEventListeners();
  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();
  const planetDetailsDiv = document.querySelector('.planet-details');
  const planetInfoView = new PlanetInfoView(planetDetailsDiv);
  planetInfoView.bindEvents();
});
