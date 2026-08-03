let div=document.createElement("div");

let body=document.querySelector("body");

body.appendChild(div);

let para1=document.createElement("p");
para1.innerText="Hey, I am red";

div.appendChild(para1);
para1.classList.add("red");


div.classList.add("box");

let h3=document.createElement("h3");
h3.innerText="Hey, I am blue";

div.appendChild(h3);

h3.classList.add("blue");

let div2=document.createElement("div");

div.appendChild(div2);

let h2=document.createElement("h2");
h2.innerText="I am inside another Div"

div2.appendChild(h2);

let p2=document.createElement("p2");
p2.innerText="ME too!"

div2.appendChild(p2);

div2.classList.add("d2");