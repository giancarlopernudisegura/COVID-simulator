export class Model {
    private cases: number;

    constructor(populationSize: number, transmissionRate: number) {
        this.populationSize = populationSize;
        this.transmissionRate = transmissionRate;
        this.cases = 1;
    }

    get probability() {
        return 1 - (this.cases / this.populationSize);
    }

    get getCases() {
        return Math.round(this.cases);
    }

    update() {
        this.cases = (1 + (this.transmissionRate * this.probability)) * this.cases;
    }
}
