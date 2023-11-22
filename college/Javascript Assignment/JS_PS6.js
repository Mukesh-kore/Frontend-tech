function sum() {
    let num = document.getElementById("num").value;
    var flag = validateNumbers(num, "errn");
    if (flag) {
        num = parseInt(num);
        let result = 0;
        while (num != 0) {
            result = result + (num % 10);
            num = Math.floor(num / 10);
        }
        document.getElementById("mydiv").innerHTML = "SUM is: " + result;

    } else
        document.getElementById("mydiv").innerHTML = "";

    document.getElementById("num").value = ""
    document.getElementById("num").focus();
}

function validateNumbers(num, errm) {
    if ((isNaN(num)) || (num.trim().length == 0)) {
        document.getElementById(errm).innerHTML = "Please enter a numeric value";
        return false;
    } else {
        document.getElementById(errm).innerHTML = "";
        return true;
    }
}