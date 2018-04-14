module.exports = class ArmedMan{
    
    constructor(x1,y1, dir){
        this.x = x1;
        this.y = y1;
        this.Direction = dir;

        
    }

    GetTarget() {
        this.o = 3;

        //Radius 5 circle

        this.directions = [
                                                                                    [this.x-2, this.y-5],   [this.x-1, this.y-5],   [this.x, this.y-5], [this.x+1, this.y-5],   [this.x+2, this.y-5],
                                                            [this.x-3, this.y-4],   [this.x-2, this.y-4],   [this.x-1, this.y-4],   [this.x, this.y-4], [this.x+1, this.y-4],   [this.x+2, this.y-4],   [this.x+3, this.y-4],
                                    [this.x-4, this.y-3],   [this.x-3, this.y-3],   [this.x-2, this.y-3],   [this.x-1, this.y-3],   [this.x, this.y-3], [this.x+1, this.y-3],   [this.x+2, this.y-3],   [this.x+3, this.y-3],   [this.x+4, this.y-3],
            [this.x-5, this.y-2],   [this.x-4, this.y-2],   [this.x-3, this.y-2],   [this.x-2, this.y-2],   [this.x-1, this.y-2],   [this.x, this.y-2], [this.x+1, this.y-2],   [this.x+2, this.y-2],   [this.x+3, this.y-2],   [this.x+4, this.y-2],   [this.x+5, this.y-2],
            [this.x-5, this.y-1],   [this.x-4, this.y-1],   [this.x-3, this.y-1],   [this.x-2, this.y-1],   [this.x-1, this.y-1],   [this.x, this.y-1], [this.x+1, this.y-1],   [this.x+2, this.y-1],   [this.x+3, this.y-1],   [this.x+4, this.y-1],   [this.x+5, this.y-1],
            [this.x-5, this.y],     [this.x-4, this.y],     [this.x-3, this.y],     [this.x-2, this.y],                             [this.x, this.y],   [this.x+1, this.y],     [this.x+2, this.y],     [this.x+3, this.y],     [this.x+4, this.y],     [this.x+5, this.y],
            [this.x-5, this.y+1],   [this.x-4, this.y+1],   [this.x-3, this.y+1],   [this.x-2, this.y+1],   [this.x-1, this.y+1],   [this.x, this.y+1], [this.x+1, this.y+1],   [this.x+2, this.y+1],   [this.x+3, this.y+1],   [this.x+4, this.y+1],   [this.x+5, this.y+1],
            [this.x-5, this.y+2],   [this.x-4, this.y+2],   [this.x-3, this.y+2],   [this.x-2, this.y+2],   [this.x-1, this.y+2],   [this.x, this.y+2], [this.x+1, this.y+2],   [this.x+2, this.y+2],   [this.x+3, this.y+2],   [this.x+4, this.y+2],   [this.x+5, this.y+2],
                                    [this.x-4, this.y+3],   [this.x-3, this.y+3],   [this.x-2, this.y+3],   [this.x-1, this.y+3],   [this.x, this.y+3], [this.x+1, this.y+3],   [this.x+2, this.y+3],   [this.x+3, this.y+3],   [this.x+4, this.y+3],
                                                            [this.x-3, this.y+4],   [this.x-2, this.y+4],   [this.x-1, this.y+4],   [this.x, this.y+4], [this.x+1, this.y+4],   [this.x+2, this.y+4],   [this.x+3, this.y+4],
                                                                                    [this.x-2, this.y+5],   [this.x-1, this.y+5],   [this.x, this.y+5], [this.x+1, this.y+5],   [this.x+2, this.y-5],

        ]
        var TargetNei = [];
        this.directions = Clear(this.directions);
        
        if (this.o == 3) {
            for (var i in this.directions) {
                if (matrix[this.directions[i][1]][this.directions[i][0]] == 3) {
                    TargetNei.push(this.directions[i]);
                }
            }
            if (TargetNei[0]){ return TargetNei; }
            else{ this.o-- };
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
            this.Target = random(this.TargetNei);
            matrix[this.Target[1]][this.Target[0]] = 0;
            if(this.o == 3){
                RemoveFromArray(this.Target,Arr_MeatEater);
            }
            else{
                RemoveFromArray(this.Target,Arr_GrassEater);
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
            RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            return;
        }

        if(matrix[this.y][this.x]==1){
            RemoveFromArray([this.x,this.y],Arr_Grass);
        }
        else if(matrix[this.y][this.x]==2){
            RemoveFromArray([this.x,this.y],Arr_GrassEater);
        }
        else if(matrix[this.y][this.x]==3){
            RemoveFromArray([this.x,this.y],Arr_MeatEater);
        }
        else if(floor(matrix[this.y][this.x])==5){
            RemoveFromArray([this.x,this.y],Arr_TimedBomb);
        }
        else if(matrix[this.y][this.y]==6){
            RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            return;
        }
        matrix[this.y][this.x]=4;
    }

}