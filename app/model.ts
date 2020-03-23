export class Model {
    private cases: number;
    private newCases: number;
    transmissionRate: number;
    populationSize: number;

    constructor(populationSize: number, transmissionRate: number) {
        this.populationSize = populationSize;
        this.transmissionRate = transmissionRate;
        this.cases = 1;
        this.newCases = 1;
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
    }
}
