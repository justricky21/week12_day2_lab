const PubSub = require('../helpers/pub_sub.js')

const PlanetInfoView = function (element){
    this.element = element;
}

PlanetInfoView.prototype.bindEvents = function(){
    PubSub.subscribe('SolarSystem:clicked-planet-ready', (event)=>{
        const clickedPlanet = event.detail;
        console.log(clickedPlanet);
        this.render(clickedPlanet);
        
    });
}

PlanetInfoView.prototype.render = function(planet) {
    
    const imageSource = planet.image;
    const body = document.querySelector('body');
    body.setAttribute('style', `background: url('${planet.image}')`)
    
    delete planet.image;
    this.element.innerHTML = '';

    for (property in planet){
        const propertyParagraph = document.createElement('p');
        propertyParagraph.textContent = property + ': ' + planet[property];
        this.element.appendChild(propertyParagraph);
        const body = document.querySelector('body');
        
    }
    planet.image = imageSource;


}


{/* <h4 id="planet-name"></h4>
    <p id="planet-day"></p>
    <p id="planet-orbit"></p>
    <p id="planet-area"></p>
    <p id="planet-volume"></p>
    <p id="planet-gravity"></p>
    <p id="planet-moons"></p> 


name: 'Mercury',
    orbit: 87.969,
    day: 58.646,
    surfaceArea: 0.147,
    volume: 0.056,
    gravity: 0.38,
    moons: 0,
    image: 'images/mercury.jpg'*/}


module.exports = PlanetInfoView;