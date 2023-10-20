const LivingCreature = require("./LivingCreature")
const Grass = require("./Grass")
let random = require("./random")

module.exports = class Gyuxaci extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 0
        this.life = 8;

    };

    getnewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    };

    pntrel(char) {
        this.getnewDirections()
        return super.pntrel(char)
    };

    move() {
        let azat = random(this.pntrel(0))
        let xot = random(this.pntrel(1))
        this.energy--;
        this.life--
            if (azat) {
                let x = azat[0]
                let y = azat[1]

                matrix[y][x] = 4
                matrix[this.y][this.x] = 0

                this.x = x;
                this.y = y;
            } else
        if (xot) {
            let x = xot[0]
            let y = xot[1]

            matrix[y][x] = 4

            matrix[this.y][this.x] = 1

            this.x = x;
            this.y = y;
        }
    }

    spanel() {
        let xotaker = random(this.pntrel(2))
        if (xotaker) {
            this.life++
                this.energy++
                let x = xotaker[0]
            let y = xotaker[1]

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

        }
        let gishatich = rnadom(this.pntrel(3))
        if (gishatich) {
            this.life++
                this.energy++
                let x = gishatich[0]
            let y = gishatich[1]


            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

        }
    }

    atsecnel() {
        let xot = random(this.pntrel(0))
        if (xot) {
            this.life++
                this.energy++
                let x = xot[0]
            let y = xot[1]

            matrix[y][x] = 1

            grassner.push(new Grass(x, y))
        }
        if (this.energy >= 8) {
            this.spanel()
        } else {
            this.move()
            this.energy--
                if (this.life === 0) {
                    this.die()
                }
        }
        if (this.energy === 8) {
            this.bazmacum()
            this.energy = 0
        }
    }

    bazmacum() {
        let azat = random(this.pntrel(0))
        if (azat && this.energy === 8) {
            let x = azat[0]
            let y = azat[1]
            matrix[y][x] = 4
            gyuxaci.push(new Gyuxaci(x, y))
            this.energy = 0
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < gyuxaci.length; i++) {
            if (this.x == gyuxaci[i].x && this.y == gyuxaci[i].y) {
                gyuxaci.splice(i, 1)
            }
        }
    }

}