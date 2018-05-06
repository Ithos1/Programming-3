

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

    GetTarget(o) {
        this.Target = false;
        //For spread
        if(o==0){
            this.radius_1();
        }
        else{
            this.radius_3();
        }
        this.TargetNei = [];
        this.Clear();
        if (o == 1) {
            for (var i in this.directions) {
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 4){
                    this.Target = true;
                    this.Target_m = true;
                    break;
                }
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 2) {
                    this.Target = true; 
                    break;
                }
            }
        }
        for (var i in this.directions) {
            if (this.Target_m && matrix[this.directions[i][1]][this.directions[i][0]] == 4){
                this.TargetNei.push(this.directions[i]);
            }
            if (matrix[this.directions[i][1]][this.directions[i][0]] == 2 && !this.Target_m) {
                this.TargetNei.push(this.directions[i]);
            }
            else if (!this.Target &&  (matrix[this.directions[i][1]][this.directions[i][0]] == 1 || matrix[this.directions[i][1]][this.directions[i][0]] == 0) ) {
                this.TargetNei.push(this.directions[i]);
            }
        }
    }

    Move() {
        this.GetTarget(1);
        //console.log(this.TargetNei);
        var i = this.Random(this.TargetNei);
        //console.log(this.x, this.y);
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