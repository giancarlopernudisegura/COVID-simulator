export class Model {
    private cases: number;
    historyCases: Array<number>;
    private newCases: number;
    historyNewCases: Array<number>;
    transmissionRate: number;
    populationSize: number;

    constructor(populationSize: number, transmissionRate: number) {
        this.populationSize = populationSize;
        this.transmissionRate = transmissionRate;
        this.cases = 1;
        this.historyCases = [];
        this.newCases = 1;
        this.historyNewCases = [];
    }

    get probability() {
        return 1 - (this.cases / this.populationSize);
    }

    get getCases() {
        return Math.round(this.cases);
    }

    get getNewCases() {
        return Math.round(this.newCases);
    }

    update() {
        let cases = (1 + (this.transmissionRate * this.probability)) * this.cases;
        this.newCases = cases - this.cases;
        this.cases = cases;
        this.historyCases.push(this.cases);
        this.historyNewCases.push(this.newCases);
    }
}
