import * as PIXI from 'pixi.js';

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
});

function update() {
    app.render(container);
    requestAnimationFrame(update);
}
