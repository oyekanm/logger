import Invoice from "./Component/Class/Invoice.js"
import Payment from "./Component/Class/Payment.js"
import Render from "./Component/Class/Render.js"
import { HasRender } from "./Component/Interface/HasRender"

const form:HTMLFormElement = document.querySelector("#form")!
const ul:HTMLUListElement = document.querySelector("#ul")!
const select:HTMLSelectElement = document.querySelector("#select")!
const client:HTMLInputElement = document.querySelector("#client")!
const detail:HTMLInputElement = document.querySelector("#detail")!
const amount:HTMLInputElement = document.querySelector("#amount")!


form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()

    let text:HasRender
    let values : [string,string, number]
    values = [client.value, detail.value,amount.valueAsNumber]

    if(select.value === "Invoice"){
        text = new Invoice(...values)
    }else{
        text = new Payment(...values)
    }

    const list = new Render(ul)
    list.format(text,`${select.value}`)

    
    
})

