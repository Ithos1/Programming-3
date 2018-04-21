module.exports = class MeatEater { 

    constructor(x1,y1){
        this.Energy = 0;
        this.HasMoved = true;
        this.TargetNei = [];
        this.x = x1;
        this.y = y1;
        this.Target = false;
        this.Target_m = false;
    }

    GetTarget(o) {
        this.Target = false;
        //For spread
        if(o==0){
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
        else{
            this.directions = [
                [this.x + 2, this.y + 2],
                [this.x + 2, this.y + 1],
                [this.x + 2, this.y],
                [this.x + 2, this.y - 1],
                [this.x + 2, this.y - 2],
                [this.x + 1, this.y + 2],
                [this.x + 1, this.y + 1],
                [this.x + 1, this.y],
                [this.x + 1, this.y - 1],
                [this.x + 1, this.y - 2],
                [this.x, this.y + 2],
                [this.x, this.y + 1],
                [this.x, this.y - 1],
                [this.x, this.y - 2],
                [this.x - 1, this.y + 2],
                [this.x - 1, this.y + 1],
                [this.x - 1, this.y],
                [this.x - 1, this.y - 1],
                [this.x - 1, this.y - 2],
                [this.x - 2, this.y + 2],
                [this.x - 2, this.y + 1],
                [this.x - 2, this.y],
                [this.x - 2, this.y - 1],
                [this.x - 2, this.y - 2],
                [this.x + 3, this.y],
                [this.x - 3, this.y],
                [this.x, this.y + 3],
                [this.x, this.y - 3]
            ];
        }
        this.TargetNei = [];
        this.directions = Clear(this.directions);
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
        var i = random(this.TargetNei);
        //console.log(this.x, this.y);
        if (i) {
            matrix[i[1]][i[0]] = 3;
            matrix[this.y][this.x] = 0;
            this.y = i[1];
            this.x = i[0];
            if(!this.Target){
                RemoveFromArray([this.x,this.y], Arr_Grass);
            }
            else if(!this.Target_m){
                RemoveFromArray([this.x,this.y], Arr_GrassEater);
            }
            else{
                RemoveFromArray([this.x,this.y], Arr_ArmedMan);
            }
        }
    }
    Spread() {
        if (this.Energy >= 3 && (Arr_GrassEater.length/2 >= Arr_MeatEater.length)) {
            this.GetTarget(0);
            var i = random(this.TargetNei);
            if (i) {
                matrix[i[1]][i[0]] = 2;
                Arr_MeatEater.push(new MeatEater(i[0], i[1]));

                RemoveFromArray(i, Arr_Grass);
                RemoveFromArray(i, Arr_GrassEater);

                this.Energy = 0;
            }
        }
        else if (this.Energy <= -10) {
            matrix[this.y][this.x] = 0;
            RemoveFromArray([this.x,this.y], Arr_MeatEater);
        }
    }

};