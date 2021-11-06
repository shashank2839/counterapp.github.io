

function myFunction(val) {
    var count = parseInt(document.getElementById("Result").value);

    if (val == "-") {
        if (count <= 0) {
            alert("Counter can not be in negative");
        } else count = count - 1;
        document.getElementById("Result").value = count;
    } else if (val == "+") {
        count = count + 1;
        document.getElementById("Result").value = count;
    } else {
        document.getElementById("Result").value = 0;
    }
}