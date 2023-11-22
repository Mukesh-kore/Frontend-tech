let  num1=document.getElementById("num1");
let  num2=document.getElementById("num2");
let   op=document.getElementById("op")
let display=document.getElementById("display");
let errMsg1=document.getElementById("errMsg1")
let errMsg2=document.getElementById("errMsg2")

function calculate(){
  display.innerHTML=""
  let flag= validateNum(num1.value,num2.value);
  if(flag){
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
    let operation=op.options[op.selectedIndex].value;
    
    switch(operation){
     case "add":display.innerHTML=`Addition of two number is ${n1+n2}`;break;
     case "sub":display.innerHTML=`Subtraction of two number is ${(n1-n2)}` ;break;
     case "multiply":display.innerHTML=`Multiplication of two number is ${(n1*n2)}`;break;
     case "div":display.innerHTML=`Division of two number is ${(n1/n2)}`;break;
     default:display.innerHTML=``;
    }
  }
    
}
function validateNum(num1,num2){
  if(isNaN(num1)||num1.trim().length==0){
    errMsg1.innerHTML="*Please Enter the valid number";
  }
  if(isNaN(num2)||num2.trim().length==0){
    errMsg2.innerHTML="*Please Enter the valid number";
  }
 if(isNaN(num1)&&isNaN(num2)){
    return false;
 }
 else return true;

}