function table(){
    let num=document.getElementById("num").value;
    var flag=validateNumbers(num, "errnum");
    if(flag){
        num=parseInt(num);
        let i=1, str="";
        while(i<=10){
            str+=`${num} *  ${i} = ${num*i} <br>`;
            i++
        }
       document.getElementById("mydiv").innerHTML=str;
       
    }else
        document.getElementById("mydiv").innerHTML = "";

        document.getElementById("num").value=""
        document.getElementById("num").focus();

}

function validateNumbers(num,errm) {
    if( (isNaN(num)) || (num.trim().length==0) ) {
        document.getElementById(errm).innerHTML="Please enter a numeric value";       
        return false;
    }else {
        document.getElementById(errm).innerHTML="";
        return true;
    }   
}