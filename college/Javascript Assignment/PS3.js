let num=document.getElementById("num");
let display=document.getElementById("display");
function printEven(){
    let n=num.value
 let flag=validateNumber(n);
 if(flag){
    let num2=parseInt(n);
    for(let i=1;i<=num2;i++){
      if(i%2==0){
       display.innerHTML+=`${i}<br>`
      }
    }
 }
}
function validateNumber(num){
    if(isNaN(num)||num.length==0){
      errMsg.innerHTML="Please Enter the valid number"
      return false
    }
    else return true
}