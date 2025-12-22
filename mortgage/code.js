document.getElementById("btn").addEventListener("click", onclick)

function onclick() {
    let P = document.getElementById("p").valueAsNumber
    let n = 12*document.getElementById("years").valueAsNumber
    let r = document.getElementById("rate").valueAsNumber / 100 / 12
    let A = P * r * (1+r)**n / ((1+r)**n - 1)
    let result = "The monthly payment is $" + A.toFixed(2) + "<br>The total payment is $" + (A*n).toFixed(2) + "<br>The total interest is $" + ((A*n)-P).toFixed(2)
    document.getElementById("result").innerHTML = result;
}
