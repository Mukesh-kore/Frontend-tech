const e_space = document.querySelector("input");
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
            e_space.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            e_space.value = string;
        }
        else if(e.target.innerHTML=="X"){
            string=string.slice(0,string.length-1);
            e_space.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            e_space.value = string;
        }

    })
});