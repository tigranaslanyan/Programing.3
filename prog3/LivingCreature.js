module.exports = class LivingCreature{
    constructor(x, y){
        this.x = x
        this.y = y
    }

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
}

