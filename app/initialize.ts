import * as PIXI from 'pixi.js';
import { Model } from 'model';
import { Graph } from "graph";

let time = 0;
let model = new Model(100000000, 0);
let graph = new Graph();

const pixiSettings = {
    resizeTo: window,
    resolution: window.devicePixelRatio,
    autoDensity: true
}

const app: PIXI.Application = new PIXI.Application(pixiSettings);
let container: PIXI.DisplayObject;

function init() {
    document.body.appendChild(app.view);
    container = new PIXI.Container();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    update();
    calculate();
    setInterval(calculate, 5000);
});

function background(): PIXI.Graphics {
    let graphic = new PIXI.Graphics();
    graphic.x = 0;
    graphic.y = 0;
    graphic.beginFill(0x000000);
    graphic.drawPolygon([new PIXI.Point(0, 0), new PIXI.Point(window.innerWidth, 0), new PIXI.Point(window.innerWidth, window.innerHeight), new PIXI.Point(0, window.innerHeight)]);
    graphic.endFill();
    return graphic;
}

function update() {
    graph.render(model.historyCases);
    app.stage.addChild(background());
    app.stage.addChild(graph.view);
    app.render(container);
    requestAnimationFrame(update);
}

// calculates events for 1 day
function calculate() {
    time++;
    model.transmissionRate = document.querySelector('input#beta').value;
    model.update();
    document.querySelector('#day').innerHTML = String(time);
    document.querySelector('#cases').innerHTML = String(model.getCases);
    document.querySelector('#newCases').innerHTML = String(model.getNewCases);
}