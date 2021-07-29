const btns = document.querySelectorAll(".btn")
let display = document.querySelector("#display")
let clr = document.querySelector("#clr")
let equal = document.querySelector("#equal")
let clrEntry = document.querySelector("#clrEntry")
 
 //showValue();
let num = showValue();
clear();
calculation();
clearEntry();



function showValue(){
  
        for(let btn of btns){
            btn.addEventListener('click', function(){
                display.innerHTML += btn.value ;
                
               })
        } return display.innerHTML;
}

function clear(){
    clr.addEventListener('click' , function(){
        display.innerHTML = '';
    } )
    
}

function calculation(){
equal.addEventListener('click', function(){
    num= display.innerHTML;
     let result = eval(num);
     display.innerHTML = result;
   
 })
}

function clearEntry(){
    clrEntry.addEventListener('click' , function(){
        display.innerHTML = display.innerHTML.slice(0, -1)
     
 })

}

 


