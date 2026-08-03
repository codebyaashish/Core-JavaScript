let pa=document.createElement("p");
pa.innerText="Welcome August!"

// let boxa=document.querySelector(".box");

// boxa.appendChild(pa);

let boxa=document.getElementsByClassName("box");
boxa[0].append(pa);