const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('ClickView:change', (event)=>{
    const planetIndex = event.detail;
    const clickedPlanet = this.planets[planetIndex];
    PubSub.publish('SolarSystem:clicked-planet-ready', clickedPlanet);
  })
}

module.exports = SolarSystem;
