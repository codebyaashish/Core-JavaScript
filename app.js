//geElementById
let imgg=document.getElementById("one");
imgg.src="assets/spiderman_img.png" ;

let imgg1=imgg.setAttribute("id","two");


//getElementByClass
let pub=document.getElementsByClassName("boxLink");

// pub.style.color="green"; 

for(let i=0;i<pub.length;i++){
    pub[i].style.color="orange" ;
}

let oldImg=document.getElementsByClassName("oldImg");

for(let i=0;i<oldImg.length;i++){
    oldImg[i].src="assets/spiderman_img.png";
}


let para=document.getElementsByTagName("p");

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="green";
}


// querySelector
let para1=document.querySelector("p");

para1.style.backgroundColor="Pink"

//innerText,innetContent,innerHTML

let h1=document.querySelector("h1");
h1.innerText="Aashish Vidyarthi"

