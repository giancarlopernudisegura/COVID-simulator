import * as PIXI from 'pixi.js';

export class Graph {
    view: PIXI.Graphics;

    init() {
        this.view = new PIXI.Graphics();
        this.view.x = 0;
        this.view.y = 0;
    }

    constructor() {
        this.init();
    }

    render(data: Array<number>) {
        this.init();
        let yTransform = (y) => {
            return (window.innerHeight / 2) - (y * (window.innerHeight / 2));
        };
        let maxVal = Math.max(...data);
        for (let i = 0; i < data.length; i++) {
            this.view.lineStyle(2, 0x00ff00);
            this.view.drawPolygon([new PIXI.Point(i * 2 + 1, yTransform(0)), new PIXI.Point(i * 2 + 1, yTransform(data[i] / maxVal))]);
            this.view.closePath();
            this.view.endFill();
        }
    }
}