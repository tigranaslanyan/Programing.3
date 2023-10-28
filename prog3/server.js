var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get("/", function(req, res) {
    res.redirect("index.html");
});

server.listen(3000, function() {
    console.log("App is running on port 3000");
});

matrix = []
gyuxaci = []
grassner = []
gishatich = []
kaycakner = []
xotakerner = []

let Grass = require("./Grass")
let random = require("./random")
let Kaycak = require("./Kaycak")
let Gyuxaci = require("./Gyuxaci")
let Gishatich = require("./Gishatich")
let GrassEater = require("./GrassEater")

function generate(a, b) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < b; j++) {
            matrix[i].push(random(4))
        }
    }
    // for (let k = 0; k <= matrix[0].length; k++) {
    //     matrix[k][k + 1] = 5
    // }
}


generate(100, 100)




function createGame() {
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
                if (matrix[y][x] === 5) {
                    kaycakner.push(new Kaycak(x, y))
                }
            }
        }
    }

    addObjects()
}

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
    io.emit('update matrix', matrix)
}

let intervalId;

let timing = 3000
    // if (dzmer == true) {
    //     timing = 5000
    // }

function startPLaying() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        playGame()
    }, timing);
}

io.on('connection', function(socket) {
    socket.emit('update matrix', matrix)
    createGame()
    startPLaying()
    socket.on("send kaycak", (isKaycak) => {
        console.log(isKaycak);

    })
    socket.on("change weather", (dzmer) => {
        console.log(dzmer);
    })
})