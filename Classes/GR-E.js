var Functions = require("./Functions");
var RemoveFromArray = Functions.Func1;
var Clear = Functions.Func2;

module.exports = class GrassEater {

    constructor(x1, y1) {
        this.Energy = 0;
        this.HasMoved = true;
        this.TargetNei = [];
        this.x = x1;
        this.y = y1;
        this.Target = false;
    }

    GetTarget(o) {
        this.Target = false;
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
        this.TargetNei = [];
        this.directions = Clear(this.directions);
        if (o == 1) {
            for (var i in this.directions) {
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 1) { this.Target = true; }
            }
        }
        for (var i in this.directions) {
            if (matrix[this.directions[i][1]][this.directions[i][0]] == 1) {
                this.TargetNei.push(this.directions[i]);
            }
            else if (!this.Target && matrix[this.directions[i][1]][this.directions[i][0]] == 0) {
                this.TargetNei.push(this.directions[i]);
            }
        }
    }

    Move() {
        this.GetTarget(1);
        //console.log(this.TargetNei);
        var i = random(this.TargetNei);
        //console.log(this.x, this.y);
        if (i) {
            matrix[i[1]][i[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.y = i[1];
            this.x = i[0];
            if (this.Target) {
                for (var i in Arr_Grass) {
                    if (Arr_Grass[i].x == this.x && Arr_Grass[i].y == this.y) {
                        Arr_Grass.splice(i, 1);
                    }
                }
            }
        }
    }
    Spread() {
        if (this.Energy >= 5) {
            this.GetTarget(0);
            var i = random(this.TargetNei);
            if (i) {
                matrix[i[1]][i[0]] = 2;
                Arr_GrassEater.push(new GrassEater(i[0], i[1]));

                RemoveFromArray(i,Arr_Grass);
            }
            this.Energy = 0;
        }
        else if (this.Energy <= -5) {
            matrix[this.y][this.x] = 0;
            RemoveFromArray([this.x,this.y],Arr_GrassEater);
        }
    }


};