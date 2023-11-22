let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
console.log(num1);
function largest() {

    let flag = validateNumber(num1, num2, num3);

    console.log(flag);
        if (flag) {

            n1 = parseInt(num1.value);
            console.log(n1);
            n2 = parseInt(num2.value);
            n3 = parseInt(num3.value);
            let display = document.getElementById("display");
            // display.innerHTML = "Showing the largest number "
            if (n1 >= n2 && n1 >= n3) {
                display.innerHTML =`Showing the largest number${n1}`;
            } else if (n2 >= n1 && n2 >= n3) {
                display.innerHTML = `Showing the largest number${n2}`;
            } else if (n3 >= n1 && n3 >= n2) {
                display.innerHTML = `Showing the largest number${n3}`;
            }
        }
    }

function validateNumber(num1, num2, num3) {
    //    num1=num1.value;
    //     num2=num2.value;
    //    num3=num3.value;
    console.log(num3.value)
    console.log(num1.value);

    if (isNaN(num1.value) || num1.value.trim().length == 0) {
        document.getElementById("first").innerHTML = "*Please enter a valid number"

    }
    if (isNaN(num2.value) || num2.value.trim().length == 0) {
        document.getElementById("second").innerHTML = "*Please enter a valid number"
    }
    if (isNaN(num3.value) || num3.value.trim().length == 0) {
        document.getElementById("third").innerHTML = "*Please enter a valid number"
    }
  
        if (isNaN(num1.value) && isNaN(num2.value) && isNaN(num3.value)) {
            // display.innerHTML="";
            return false;
        }
        
        else return true

    }

