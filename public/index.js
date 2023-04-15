import Invoice from "./Component/Class/Invoice.js";
import Payment from "./Component/Class/Payment.js";
import Render from "./Component/Class/Render.js";
const form = document.querySelector("#form");
const ul = document.querySelector("#ul");
const select = document.querySelector("#select");
const client = document.querySelector("#client");
const detail = document.querySelector("#detail");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text;
    let values;
    values = [client.value, detail.value, amount.valueAsNumber];
    if (select.value === "Invoice") {
        text = new Invoice(...values);
    }
    else {
        text = new Payment(...values);
    }
    const list = new Render(ul);
    list.format(text, `${select.value}`);
    client.value = "";
    detail.value = "";
    amount.value = "";
});
