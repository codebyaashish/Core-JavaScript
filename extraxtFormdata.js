
let form=document.querySelector("form");


form.addEventListener("submit",(event)=>{

   event.preventDefault();

   let inp=document.querySelector("input");
    console.dir(inp);
   console.log(inp.value);

})


