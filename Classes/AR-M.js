var parent = require("./parent.js");


module.exports = class ArmedMan extends parent{
    
    constructor(x1,y1, dir){
        super(x1,y1);
        this.Direction = dir;

        
    }

    GetTarget() {
        this.o = 3;

        //Radius 5 circle

        this.radius_5();
        var TargetNei = [];
        this.Clear();
        
        if (this.o == 3) {
            for (var i in this.directions) {
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 3) {
                    TargetNei.push(this.directions[i]);
                }
            }
            if (TargetNei[0]){ return TargetNei; }
            else{ this.o--; }
        }
        if(this.o == 2){
            for (var i in this.directions){
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 2) {
                    TargetNei.push(this.directions[i]);
                }
            }
            if (TargetNei[0]){ return TargetNei; }
            else{return;}
        }
        
    }

    Shoot() {
        this.TargetNei = this.GetTarget();

        if(this.TargetNei){
            this.Target = this.Random(this.TargetNei);
            matrix[this.Target[1]][this.Target[0]] = 0;
            if(this.o == 3){
               this.RemoveFromArray(this.Target,Arr_MeatEater);
            }
            else{
               this.RemoveFromArray(this.Target,Arr_GrassEater);
            }
        }
    }

    Move(){
        matrix[this.y][this.x]=0;

        if(this.Direction == "east"){
            this.x++;
        }
        else if(this.Direction == "west"){
            this.x--;
        }
        else if(this.Direction == "north"){
            this.y--;
        }
        else{
            this.y++;
        }

        if (this.x == -1 || this.x == x || this.y == -1 || this.y == y) {
            this.RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            return;
        }

        if(matrix[this.y][this.x]==1){
           this.RemoveFromArray([this.x,this.y],Arr_Grass);
        }
        else if(matrix[this.y][this.x]==2){
           this.RemoveFromArray([this.x,this.y],Arr_GrassEater);
        }
        else if(matrix[this.y][this.x]==3){
           this.RemoveFromArray([this.x,this.y],Arr_MeatEater);
        }
        else if(floor(matrix[this.y][this.x])==5){
           this.RemoveFromArray([this.x,this.y],Arr_TimedBomb);
        }
        else if(matrix[this.y][this.y]==6){
           this.RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            return;
        }
        matrix[this.y][this.x]=4;
    }

};