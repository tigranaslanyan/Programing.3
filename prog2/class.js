class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.age = 0;
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
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    };

    bazmacum() {
        this.age++
        let azat = random(this.pntrel(0))
        // console.log(azat);
        if (azat && this.age > 3) {
            let x = azat[0]
            let y = azat[1]
            matrix[y][x] = 1
            grassner.push(new Grass(x, y))
            this.age = 0
        }
    }
}

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0
        this.life = 5;

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
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    };

    move() {
        let azat = random(this.pntrel(0))
        this.energy--;
        this.life--
        if (azat) {
            let x = azat[0]
            let y = azat[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        let xot = random(this.pntrel(1))
        if (xot) {
            this.life++
            this.energy++
            let x = xot[0]
            let y = xot[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

            for (let i = 0; i < grassner.length; i++) {
                if (x == grassner[i].x && y == grassner[i].y) {
                    grassner.splice(i, 1);
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
            matrix[y][x] = 2
            xotakerner.push(new GrassEater(x, y))
            this.energy = 0
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < xotakerner.length; i++) {
            if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                xotakerner.splice(i, 1)
            }
        }
    }

}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
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

class Gyuxaci {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
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
        } else if (xot) {
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
        }

        else {
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