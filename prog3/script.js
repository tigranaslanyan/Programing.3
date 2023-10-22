const socket = io()

let side = 10
let sideX = 50
let sideY = 50

socket.on("update matrix", drawful)


function randomXotaker() {
    for (let i = 0; i < 3; i++) {
        let x = Math.round(Math.random() * 100)
        let y = Math.round(Math.random() * 100)
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {

            matrix[y][x] = 2
            xotakerner.push(new GrassEater(x, y))
        }
    }
}

let randomxotaker = document.getElementById("randomxotaker")
randomxotaker.addEventListener("click", randomXotaker)

function randomXoter() {  
    for (let i = 0; i < 5; i++) {
        let x = Math.round(Math.random() * 100)
        let y = Math.round(Math.random() * 100)
        if (matrix[y][x] == 0) {

            matrix[y][x] = 1
            grassner.push(new Grass(x, y))
        }
    }
}

let randomxoter = document.getElementById("randomxoter")
randomxoter.addEventListener("click", randomXoter)

function randomGishatich() {
    for (let i = 0; i < 7; i++) {
        let x = Math.round(Math.random() * 100)
        let y = Math.round(Math.random() * 100)
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {

            matrix[y][x] = 3
            gishatich.push(new Gishatich(x, y))
        }
    }
}

let randomgishatich = document.getElementById("randomgishatich")
randomgishatich.addEventListener("click", randomGishatich)

function randomGyuxaci() {
    for (let i = 0; i < 9; i++) {
        let x = Math.round(Math.random() * 100)
        let y = Math.round(Math.random() * 100)
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {

            matrix[y][x] = 4
            gyuxaci.push(new Gyuxaci(x, y))
        }
    }
}

let randomgyuxaci = document.getElementById("randomgyuxaci")
randomxgyuxaci.addEventListener("click", randomGyuxaci)

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

