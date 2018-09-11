const PubSub = require('../helpers/pub_sub.js')

const ClickView = function(element){
    this.element = element;
}

ClickView.prototype.addEventListeners = function(){
    
    this.element.forEach((planet, index) => {
        planet.addEventListener(('click'), (event) => {
            PubSub.publish('ClickView:change', index);
            console.log(`clicked ${index}!`);
        });

    })

};

module.exports = ClickView;