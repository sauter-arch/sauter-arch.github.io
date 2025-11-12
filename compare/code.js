document.getElementById("btn").addEventListener("click", onclick)

function onclick ()
{
    num1 = document.getElementById("first").valueAsNumber;
    num2 = document.getElementById("second").valueAsNumber;
    num3 = document.getElementById("third").valueAsNumber;
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    document.getElementById("result").innerHTML = max;
}