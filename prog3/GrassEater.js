class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x,y)
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
        return super.pntrel(char)
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