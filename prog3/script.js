let side = 10
matrix = []

function generate(a, b) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < b; j++) {
            matrix[i].push(Math.round(Math.random() * 4))

        }
    }
}

generate(100, 100)
console.log(matrix);

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}


let grassner = []
let xotakerner = []
let gishatich = []
let gyuxaci = []
function randomXotaker() {

    for(let i = 0; i< 3; i++){
        let x = Math.round(Math.random()* 100)
        let y = Math.round(Math.random()* 100)
        if(matrix[y][x] == 0 || matrix[y][x] == 1){

            matrix[y][x] = 2
            xotakerner.push(new GrassEater(x,y))
        }
    }
    

}
function randomXoter() {

    for(let i = 0; i< 5; i++){
        let x = Math.round(Math.random()* 100)
        let y = Math.round(Math.random()* 100)
        if(matrix[y][x] == 0){

            matrix[y][x] = 1
            grassner.push(new Grass(x,y))
        }
    }
    

}
function randomGishatich() {

    for(let i = 0; i< 7; i++){
        let x = Math.round(Math.random()* 100)
        let y = Math.round(Math.random()* 100)
        if(matrix[y][x] == 0 || matrix[y][x] == 1){

            matrix[y][x] = 3
            gishatich.push(new Gishatich(x,y))
        }
    }
    

}
function randomGyuxaci() {

    for(let i = 0; i< 9; i++){
        let x = Math.round(Math.random()* 100)
        let y = Math.round(Math.random()* 100)
        if(matrix[y][x] == 0 || matrix[y][x] == 1){

            matrix[y][x] = 4
            gyuxaci.push(new Gyuxaci(x,y))
        }
    }
    

}
function addObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) {
                grassner.push(new Grass(x, y));
            }
            if (matrix[y][x] === 2) {
                xotakerner.push(new GrassEater(x, y))
            }
            if (matrix[y][x] === 3) {
                gishatich.push(new Gishatich(x, y))
            }
            if (matrix[y][x] === 4) {
                gyuxaci.push(new Gyuxaci(x, y))
            }
        }
    }
}

addObjects()

function draw() {
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

   

    
    
    for (let i = 0; i < grassner.length; i++) {

        grassner[i].bazmacum()
    }

    for (let i = 0; i < xotakerner.length; i++) {
        xotakerner[i].eat()
    }

    for (let i = 0; i < gishatich.length; i++) {
        gishatich[i].eat()
    }
    for (let i = 0; i < gyuxaci.length; i++) {
        gyuxaci[i].atsecnel()
    }
}


