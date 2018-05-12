var parent = require("./parent.js");

module.exports = class GrassEater extends parent{

    constructor(x1, y1) {
        super(x1,y1);
        this.Energy = 0;
        this.HasMoved = true;
        this.TargetNei = [];
        this.Target = false;
    }

    Move() {
        this.GetTarget(1);
        //console.log(this.TargetNei);
        var i = this.Random(this.TargetNei);
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
            if(this.G == "male"){
                this.GetTarget(2.5);
                var i = this.Random(this.TargetNei);
                if (i) {
                    this.GetTarget(0)
                    matrix[i[1]][i[0]] = 2;
                    Arr_GrassEater.push(new GrassEater(i[0], i[1]));

                this.RemoveFromArray(i,Arr_Grass);
                }
                this.Energy = 0;
            }
            else{
                this.Energy = 4;
            }
        }
            else if (this.Energy <= -5) {
                matrix[this.y][this.x] = 0;
            this.RemoveFromArray([this.x,this.y],Arr_GrassEater);
            }
        }

};