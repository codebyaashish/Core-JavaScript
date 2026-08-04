let btn1=document.querySelector("button");
let btn=document.querySelectorAll("button");


for(let i=0;i<btn1.length;i++){
    btn1[i].onclick=(()=>{
        console.log("you clicked");
    });
};


//it will work for element not for nodelist for that u have to run loop
btn1.addEventListener("click",()=>{
        console.log("you clicked");
    })



for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        console.log("you clicked");
    })
}