import kotlin from 'kotlinApp';
import config from './config.js';

document.addEventListener("DOMContentLoaded", function(){
    const infoGenerator = kotlin.app.info.InfoGenerator;
    /*or you can: let infoGenerator = require('kotlinApp').app.info.InfoGenerator;*/

    const message = "Hello world from " + config.name + " and " + infoGenerator.name ;

    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createTextNode(message));
});

