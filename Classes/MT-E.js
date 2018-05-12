

var parent = require("./parent.js");

module.exports = class MeatEater extends parent{ 

    constructor(x1,y1){
        super(x1,y1);
        this.Energy = 0;
        this.HasMoved = true;
        this.TargetNei = [];
        this.Target = false;
        this.Target_m = false;
    }


    Move() {
        this.GetTarget(1);
        var i = this.Random(this.TargetNei);
        if (i) {
            matrix[i[1]][i[0]] = 3;
            matrix[this.y][this.x] = 0;
            this.y = i[1];
            this.x = i[0];
            if(!this.Target){
               this.RemoveFromArray([this.x,this.y], Arr_Grass);
            }
            else if(!this.Target_m){
               this.RemoveFromArray([this.x,this.y], Arr_GrassEater);
            }
            else{
               this.RemoveFromArray([this.x,this.y], Arr_ArmedMan);
            }
        }
    }
    Spread() {
        if (this.Energy >= 3 && (Arr_GrassEater.length/2 >= Arr_MeatEater.length)) {
            this.GetTarget(0);
            var i = this.Random(this.TargetNei);
            if (i) {
                matrix[i[1]][i[0]] = 2;
                Arr_MeatEater.push(new MeatEater(i[0], i[1]));

               this.RemoveFromArray(i, Arr_Grass);
               this.RemoveFromArray(i, Arr_GrassEater);

                this.Energy = 0;
            }
        }
        else if (this.Energy <= -10) {
            matrix[this.y][this.x] = 0;
           this.RemoveFromArray([this.x,this.y], Arr_MeatEater);
        }
    }

};