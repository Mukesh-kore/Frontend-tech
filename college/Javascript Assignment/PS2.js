function populate() {
    let num = document.getElementById("num").value;
    let msg = document.getElementById("msg").value;
    let errMsg = document.getElementById("errMsg");
    var display = document.getElementById("display");

    // alert(num);
    // alert(msg);
    function validate(num) {
        if (isNaN(num) || num.length == 0) {
            errMsg.innerHTML = "*Please enter the valid number"
            return false;
        }
        else return true;
    }
    let flag = validate(num);
    display.innerHTML = ""
    if (flag) {
        n = parseInt(num);
        for (let x = 1; x <= n; x++) {
            display.innerHTML += `${msg} <br>`
        }
    }


}

