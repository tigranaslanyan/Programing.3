class Grass extends LivingCreature {
    constructor(x, y) {
        super(x,y)
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