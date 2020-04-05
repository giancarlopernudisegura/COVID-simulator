const d3 = require('d3');

function arrayToJSON(array: Array<any>): Object {
    let json = {};
    for (const key in array) {
        json[key] = array[key];
    }
    return json;
}

export class Chart {
    DOM: any;
    width: number;
    height: number;
    data: Array<number>;

    constructor(element: string) {
        this.DOM = d3.select(element)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        let clip = this.DOM.append('defs').append('svg:clipPath')
            .attr('id', 'clip')
            .append('svg:rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('x', 0)
            .attr('y', 0);
    }

    render() {
        //
    }
}