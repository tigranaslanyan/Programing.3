const LivingCreature = require("./LivingCreature")
let random = require("./random")

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 0
        this.life = 10;

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
                matrix[y][x] = 3
                matrix[this.y][this.x] = 0

                this.x = x;
                this.y = y;
            }
        if (xot) {
            let x = xot[0]
            let y = xot[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 1

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        let xot = random(this.pntrel(2))
        if (xot) {
            this.life++
                this.energy++
                let x = xot[0]
            let y = xot[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

            for (let i = 0; i < xotakerner.length; i++) {
                if (x == xotakerner[i].x && y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                }
            }

        } else {
            this.move()
            this.energy--
                if (this.life === 0) {
                    this.die()
                }
        }
        if (this.energy === 5) {
            this.bazmacum()
            this.energy = 0
        }
    }

    bazmacum() {
        let azat = random(this.pntrel(0))
        if (azat && this.energy === 5) {
            this.life++
                let x = azat[0]
            let y = azat[1]
            matrix[y][x] = 3
            gishatich.push(new Gishatich(x, y))
            this.energy = 0
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < gishatich.length; i++) {
            if (this.x == gishatich[i].x && this.y == gishatich[i].y) {
                gishatich.splice(i, 1)
            }
        }
    }

}