import { HasRender } from "../Interface/HasRender";

export default class Invoice implements HasRender  {
    // client:string;
    // detail:string;
    // amount:number
    constructor(
    readonly client:string,
    public detail:string,
    private amount:number
        // name:string,
        // note:string,
        // cash:number
    ) {
        // this.client = name;
        // this.detail = note;
        // this.amount = cash
    }

    render(){
        return `${this.client} owes £${this.amount} for ${this.detail}`
    }
}