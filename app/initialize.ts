import * as PIXI from 'pixi.js';
import { Model } from './model';

let time = 0;
let model = new Model(100000000, 0);

const pixiSettings = {
    resizeTo: window
}

const app = new PIXI.Application(pixiSettings);
let container: PIXI.DisplayObject;

function init() {
    document.body.appendChild(app.view);
    container = new PIXI.Container();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    update();
    setInterval(calculate, 5000);
});

function update() {
    app.render(container);
    model.transmissionRate = document.querySelector('#beta').value;
    requestAnimationFrame(update);
}

// calculates events for 1 day
function calculate() {
    time++;
    model.update();
    console.log(`Day: ${time}`);
    console.log(model.getCases);
}

