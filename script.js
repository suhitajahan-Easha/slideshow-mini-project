let slide= document.querySelectorAll(".slide-element");

let count=1;
setInterval(() => {
    count++;
 let current=document.querySelector(".current");
 current.classList.remove("current");

 if(count>slide.length){

    slide[0].classList.add("current")
     
 } 
 else 
     current.nextElementSibling.classList.add("current");

 

    
}, 2000);