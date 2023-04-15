import { HasRender } from "../Interface/HasRender";

export default class Render {
    constructor(private ul:HTMLUListElement){}
    format(text:HasRender,heading:string){
     const li =   document.createElement("li")
     const p =   document.createElement("p")
     const h4 =   document.createElement("h4")
     this.ul.append(li)

    li.className="shadow mb-8 mb-8 p-4 pr-8"
     h4.className="text-[2.5rem]  font-Bold text-blue-600 mb-4"
     p.className="text-[2rem]  font-normal  capitalize mb-4"
        
     p.innerText =text.render()
     h4.innerText = heading

     li.append(h4)
     li.append(p)
    }
}