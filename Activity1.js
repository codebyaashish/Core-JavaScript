let h1=document.createElement("h1");
h1.innerText="Generate a random Color";

let body=document.querySelector("body");

body.append(h1);


let btn=document.createElement("button");
btn.innerText="Generate Color";

body.append(btn);


let div=document.createElement("div");
div.innerText="This is your new Color";

body.append(div);

div.classList.add("box");




function changeCol(){

    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}



    btn.addEventListener("click",()=>{

        let newCol=changeCol();
        h1.innerText=newCol;
        div.style.backgroundColor=newCol;
    })

