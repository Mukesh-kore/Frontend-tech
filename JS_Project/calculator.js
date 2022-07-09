const espace = document.querySelector("input");
const buttons = document.querySelectorAll(".btn");
let string = "";
// console.log(buttons);//object
// console.log(Array.from(buttons));//array
// // for(let i of buttons){

// }-->can iterate over the button object
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        // console.log(typeof(e));
        if (e.target.innerHTML == "=") {
            string = eval(string);
            espace.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            espace.value = string;
        }
        else if(e.target.innerHTML=="X"){
            string=string.slice(0,string.length-1);
            espace.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            espace.value = string;
        }

    })
});