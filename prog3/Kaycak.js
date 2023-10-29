let random = require("./random")

module.exports = class Kaycak{
    constructor(x, y){
        this.x = x
        this.y = y
        this.directions = [
            [this.x, this.y + 1]
            [this.x + 1, this.y]
        ]
    }
    pntrel(a,b,c,d){
        let found = [];
        for (let i = 0; i < this.directions.length; i++) { 
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === a) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] === b) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] === c) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] === d) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    spanel(){
        let charachters = random(this.pntrel(1,2,3,4))
        if(charachters){
            let x = charachters[0]
            let y = charachters[1]

            matrix[y][x] = 0
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

            for (let i = 0; i < grassner.length; i++) {
                if (x == grassner[i].x && y == grassner[i].y) {
                    grassner.splice(i, 1);
                }
            }
            for (let i = 0; i < gyuxaci.length; i++) {
                if (x == gyuxaci[i].x && y == gyuxaci[i].y) {
                    gyuxaci.splice(i, 1);
                }
            }
            for (let i = 0; i < gishatich.length; i++) {
                if (x == gishatich[i].x && y == gishatich[i].y) {
                    gishatich.splice(i, 1);
                }
            }
            for (let i = 0; i < xotakerner.length; i++) {
                if (x == xotakerner[i].x && y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                }
            }
        }
    }
}