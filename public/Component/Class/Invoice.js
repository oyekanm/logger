export default class Invoice {
    // client:string;
    // detail:string;
    // amount:number
    constructor(client, detail, amount
    // name:string,
    // note:string,
    // cash:number
    ) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
        // this.client = name;
        // this.detail = note;
        // this.amount = cash
    }
    render() {
        return `${this.client} owes £${this.amount} for ${this.detail}`;
    }
}
