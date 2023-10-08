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