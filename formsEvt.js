let btn=document.querySelector("button");


// btn.addEventListener("click",function(event){
//     console.log(event.pointerType);
//     console.log("button was clicked using mouse");
// })


// btn.addEventListener("click",function(evt){
//     console.log(evt);
//     console.log("Key was pressed");
// })


//Keyboard events

let inp=document.querySelector("input");

inp.addEventListener("keydown",(event)=>{
 
      console.log("key: ",event.key);
        console.log("code: ",event.code);
    console.log("key was fired");
})


//form events

let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted");
})