export default class Payment {
    constructor(
    // readonly client:string,
    // public detail:string,
    // private amount:number
    name, note, cash) {
        this.client = name;
        this.detail = note;
        this.amount = cash;
    }
    render() {
        return `${this.client} has paid £${this.amount} for ${this.detail}`;
    }
}
