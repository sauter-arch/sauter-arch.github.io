let pen = document.getElementById("game").getContext("2d")
let x = 0
let y = 0
let dx = 10
let dy = 10
let is_left = false
let is_right = false
let is_up = false
let is_down = false

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()



function onkeydown(event_object) {
    if (event_object.key === "a") {
        is_left = true
    } else if (event_object.key === "d") {
        is_right = true
    } else if (event_object.key === "w") {
        is_up = true
    } else if (event_object.key === "s") {
        is_down = true
    } else if (event_object.key === "Enter") { 
        setInterval(drawFrame, 50)
    } else if (event_object.key === " ") {
        clearInterval()
        drawBackground()
    }
}

function onkeyup(event_object) {
    if (event_object.key === "a") {
        is_left = false
    } else if (event_object.key === "d") {
        is_right = false
    } else if (event_object.key === "w") {
        is_up = false
    } else if (event_object.key === "s") {
        is_down = false
    }
}

function drawFrame() {

    if(is_left) {
        x = x - dx
    } else if (is_right) {
        x = x + dx
    } else if (is_up){
        y = y - dy
    } else if (is_down) {
        y = y + dy
    }
    if (x >= 380){
        x = 380
    } else if (x <= 0) {
        x = 0
    }
    if (y >= 380) {
        y = 380
    } else if (y <= 0) {
        y = 0
    }
    drawSquare(x, y)

}

function drawBackground() {
    pen.fillStyle = "#ffffffff"
    pen.fillRect(0, 0, 400, 400)
} 

function drawSquare(x, y) {
    pen.fillStyle = "#ef3eabff"
    pen.fillRect(x, y, 20, 20)
}