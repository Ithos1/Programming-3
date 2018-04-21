module.exports = class Grass {
    constructor(x1, y1) {
        this.SpreadingTemp = 2;
        this.TargetNei = [];
        this.x = x1;
        this.y = y1;
        this.Count = 0;

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

    }

    GetTarget() {
        this.TargetNei = [];
        this.directions = Clear(this.directions);
        for (var i in this.directions) {
            if (matrix[this.directions[i][1]][this.directions[i][0]] == 0) {
                this.TargetNei.push(this.directions[i]);
            }
        }
    }

    Spread() {
        if (this.Count >= this.SpreadingTemp) {
            this.GetTarget();
            var i = random(this.TargetNei);
            if (i) {
                matrix[i[1]][i[0]] = 1;
                Arr_Grass.push(new Grass(i[0], i[1]));
                this.Count = 0;
            }
        }
    }



};