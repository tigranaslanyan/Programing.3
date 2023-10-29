var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("App is running on port 3000");
});

matrix = []
gyuxaci = []
grassner = []
gishatich = []
kaycakner = []
xotakerner = []
winter = false

let Grass = require("./Grass")
let random = require("./random")
let Kaycak = require("./Kaycak")
let Gyuxaci = require("./Gyuxaci")
let Gishatich = require("./Gishatich")
let GrassEater = require("./GrassEater")

sideX = 45;
sideY = 45;

function createMatrix() {

    for (let i = 0; i < sideX; i++) {
        matrix.push([])
        for (let j = 0; j < sideY; j++) {
            matrix[i].push(0)
        }
    }

    function character(char, qantity) {
        for (let i = 0; i < qantity; i++) {
            var x = random(sideX);
            var y = random(sideY)
            matrix[x][y] = char;

        }
    }


    character(1, 100);
    character(2, 50);
    character(3, 1);
    character(4, 1);
    character(5, 50);

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
            if (matrix[y][x] === 5) {
                kaycakner.push(new Kaycak(x, y))
            }
        }
    }

}


createMatrix() 
    function playGame() {
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
        for (i = 0; i < kaycakner.length; i++) {
            kaycakner[i].spanel()
        }
        io.emit('update matrix', matrix)
    }

    let intervalId;

    let timing = 1000
    if (winter == true) {
        timing = 5000
    }

    function startPLaying() {
        clearInterval(intervalId)
        intervalId = setInterval(() => {
            playGame()
        }, timing);
    }

    io.on('connection', function (socket) {
        socket.emit('update matrix', matrix)
        // createGame()
        startPLaying()
        socket.on("send kaycak", (isKaycak) => {
            console.log(isKaycak);

        })
        socket.on("change weather", (dzmer) => {
            winter = dzmer
        })

        socket.on('Total statistics', (data) => {
            fs.writeFileSync('data.json', JSON.stringify(data))
            socket.emit('display statistics', data)
        })
    })

