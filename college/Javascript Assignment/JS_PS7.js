
function min() {

    let str = document.getElementById("num").value;
    let arr = str.split(",");
    for (let ob of arr) {
        if (isNaN(ob)) {
            document.getElementById("errnum").innerHTML = "Please enter only numbers!!!";
        } else {
            let result = arr.reduce((acc, val) => (acc < val) ? acc : val);
            document.getElementById("mydiv").innerHTML = result;
        }
    }
    document.getElementById("num").value="";
    document.getElementById("num").focus();
}
