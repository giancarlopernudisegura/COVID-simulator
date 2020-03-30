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
    document.querySelector('#default-tab').click();
});

function update() {
    app.render(container);
    requestAnimationFrame(update);
}

export function openTab(e: MouseEvent, tab: string) {
    let tabContents: NodeListOf<any>, tabLinks: NodeListOf<any>;

    tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none';
    });

    tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach((tabLink) => {
        tabLink.className = tabLink.className.replace(" visible", "");
    });

    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " visible";
}