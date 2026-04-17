import { testImport } from './test.js'
import { getAllPins } from './queries.js'
import './sidebar.js';

testImport();
//test coment
const sidebar = document.getElementById("sidebar");

let map = L.map('map').setView([43.75, -71.68], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let flagObj = L.icon({
    iconUrl: './src/assets/flag.png',
    iconSize:     [60, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

async function drawPins() {
    let pinData = await getAllPins();
    for (let ii = 0; ii < pinData.length; ii++) {
        L.marker([pinData[ii]['lat'], pinData[ii]['long']], {icon: flagObj}).addTo(map).on('click', flagClick);
    }
    return;
}
drawPins();

/*
 * used for getting the information for the sidebar
 */
function renderInfo(pinData) {
    return; //COMING BACK TO THIS
    sidebar.innerHTML += `
    `;
}

function flagClick(e) {
    console.log("clicked a marker");
    console.log(`${e.latlng}`);
    sidebar.style.display = "inline";
    let marginVal = 100;
    let marginInc = 1; 
    let ti = setInterval(() => {
        if (marginVal <= 50) {
            clearInterval(ti);
        }
        sidebar.style.margin = `0% 0% 0% ${marginVal}%`;
        marginVal = marginVal - marginInc;
        if (marginInc > .01) {
            marginInc = marginInc - .01;
        }
    }, 8);

    renderPinInfo(e);
    
}


