const socket = io()

let side = 30
let sideX = 30
let sideY = 30
io.on("randomxotaker", randomXotaker)

let randomxotaker = document.getElementById("randomxotaker")
randomxotaker.addEventListener("click", randomXotaker)

function setup() {
    createCanvas(sideX * side, sideY * side);
    background('#acacac');
}

function drawful(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("brown");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on("update matrix", drawful)

