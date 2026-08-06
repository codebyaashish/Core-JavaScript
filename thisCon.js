let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let p=document.querySelector("p");
let h3=document.querySelector("h3");


let changeCOl=function(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellowgreen";
    
}

btn.addEventListener('click',function(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellowgreen";
})


h1.addEventListener('click',function(){
    console.dir(this.innerText);

h2.style.backgroundColor="yellowgreen";
})


p.addEventListener('click',function(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellowgreen";
})

//more comapct way to write use this only
h3.addEventListener('click',changeCOl);