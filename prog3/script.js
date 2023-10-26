const socket = io()

let side = 10
let sideX = 50
let sideY = 50
isKaycak = false

socket.on("update matrix", drawful)

function showKaycak(){ 
    isKaycak = !isKaycak
    socket.emit("send kaycak", isKaycak)
 
}

let kaycak = document.getElementById("kaycak")
kaycak.addEventListener("click", showKaycak)

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
            } else if (matrix[y][x] == 5)  {
                if(isKaycak == true){
                fill("blue")
                }
            }
            rect(x * side, y * side, side, side);
        }
    }
}

