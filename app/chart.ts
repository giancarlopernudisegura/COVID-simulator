const d3 = require("d3");

export class Chart {
    DOM: any;

    constructor(element: string) {
        this.DOM = d3.select(element);
    }
}