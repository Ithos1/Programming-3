//Grass

class Grass {
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



}

//Grass-Eater


class GrassEater {

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


}


//Meat-Eater

class MeatEater { 

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
            ]
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

}

//Armed Man

class ArmedMan{
    
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
            [this.x-5, this.y],     [this.x-4, this.y],     [this.x-3, this.y],     [this.x-2, this.y],     [this.x-1, this.y],                         [this.x+1, this.y],     [this.x+2, this.y],     [this.x+3, this.y],     [this.x+4, this.y],     [this.x+5, this.y],
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

//Timed Bomb

class TimedBomb{
    constructor(x1,y1){
        this.x = x1;
        this.y = y1;
        this.Direction = random(["east","west","north","south"]);
        this.Timer = Math.round(random(5,10));

        //Radius 4 circle

        this.directions = [
                                                                                    [this.x-2, this.y-4],   [this.x-1, this.y-4],   [this.x, this.y-4], [this.x+1, this.y-4],   [this.x+2, this.y-4],
                                                            [this.x-3, this.y-3],   [this.x-2, this.y-3],   [this.x-1, this.y-3],   [this.x, this.y-3], [this.x+1, this.y-3],   [this.x+2, this.y-3],   [this.x+3, this.y-3],
                                    [this.x-4, this.y-2],   [this.x-3, this.y-2],   [this.x-2, this.y-2],   [this.x-1, this.y-2],   [this.x, this.y-2], [this.x+1, this.y-2],   [this.x+2, this.y-2],   [this.x+3, this.y-2],   [this.x+4, this.y-2],
                                    [this.x-4, this.y-1],   [this.x-3, this.y-1],   [this.x-2, this.y-1],   [this.x-1, this.y-1],   [this.x, this.y-1], [this.x+1, this.y-1],   [this.x+2, this.y-1],   [this.x+3, this.y-1],   [this.x+4, this.y-1],
                                    [this.x-4, this.y],     [this.x-3, this.y],     [this.x-2, this.y],     [this.x-1, this.y],       [this.x, this.y],   [this.x+1, this.y],     [this.x+2, this.y],     [this.x+3, this.y],     [this.x+4, this.y],
                                    [this.x-4, this.y+1],   [this.x-3, this.y+1],   [this.x-2, this.y+1],   [this.x-1, this.y+1],   [this.x, this.y+1], [this.x+1, this.y+1],   [this.x+2, this.y+1],   [this.x+3, this.y+1],   [this.x+4, this.y+1],
                                    [this.x-4, this.y+2],   [this.x-3, this.y+2],   [this.x-2, this.y+2],   [this.x-1, this.y+2],   [this.x, this.y+2], [this.x+1, this.y+2],   [this.x+2, this.y+2],   [this.x+3, this.y+2],   [this.x+4, this.y+2],
                                                            [this.x-3, this.y+3],   [this.x-2, this.y+3],   [this.x-1, this.y+3],   [this.x, this.y+3], [this.x+1, this.y+3],   [this.x+2, this.y+3],   [this.x+3, this.y+3],
                                                                                    [this.x-2, this.y+4],   [this.x-1, this.y+4],   [this.x, this.y+4], [this.x+1, this.y+4],   [this.x+2, this.y+4]

        ]
        this.directions = Clear(this.directions);
    }

    explode(){
        if(matrix[this.y][this.x]==5){
            matrix[this.y][this.x]=5.5;
        }
        else{
            matrix[this.y][this.x]=5;
        }
        if(this.Timer-- == 0){
            for(var i in this.directions){
                if(matrix[this.directions[i][1]][this.directions[i][0]]==1){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_Grass);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==2){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_GrassEater);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==3){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_MeatEater);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==4){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_ArmedMan);
                }
                else if(floor(matrix[this.directions[i][1]][this.directions[i][0]])==5){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_TimedBomb);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==6){
                    RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_ToxicGas);
                }
                matrix[this.directions[i][1]][this.directions[i][0]]=0;
            }
                
            this.ReleaseToxicGas();
            }
        }


    ReleaseToxicGas(){
        this.directions = [
                                    [this.x,this.y-2],      [this.x+1,this.y-2],    [this.x+2,this.y-2],                
            [this.x-2,this.y-1],    [this.x-1,this.y-1],    [this.x,this.y-1],      [this.x+1,this.y-1],    [this.x+2,this.y-1],
            [this.x-2,this.y],      [this.x-1,this.y],      [this.x,this.y],        [this.x+1,this.y],      [this.x+2,this.y],
            [this.x-2,this.y+2],    [this.x-1,this.y+2],    [this.x,this.y+2],      [this.x+1,this.y+2],    [this.x+2,this.y+2],                
                                    [this.x-1,this.y+1],    [this.x,this.y+1],      [this.x+1,this.y+1]
        ]
        this.directions = Clear(this.directions);
        for(var i in this.directions){
            matrix[this.directions[i][1]][this.directions[i][0]]=6;
            Arr_ToxicGas.push(new ToxicGas(this.directions[i],this.Direction));
        }
        RemoveFromArray([this.x,this.y],Arr_TimedBomb);
    }

}

//Toxic Gas


class ToxicGas {

    constructor(x_y,dir){
        this.x=x_y[0];
        this.y=x_y[1];
        this.Direction=dir;
        this.Timer = 3;
    }


    Move(){

        if (this.x == -1 || this.x == x || this.y == -1 || this.y == y) {
            RemoveFromArray([this.x,this.y],Arr_ToxicGas);
            return;
        }


        if(this.Timer != 0){
           
           
            this.Timer--;


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
                RemoveFromArray([this.x,this.y],Arr_ToxicGas);
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
            else if(matrix[this.y][this.y]==4){
                RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            }
            else if(floor(matrix[this.y][this.x])==5){
                return;
            }

        }
        else{
            matrix[this.y][this.x]=0;
            RemoveFromArray([this.x,this.y],Arr_ToxicGas);
        }
    }

    Draw(){
        matrix[this.y][this.x]=6;
    }

}


function RemoveFromArray(coords, array){
    for (var i in array) {
        if (array[i].x == coords[0] && array[i].y == coords[1]) {
            array.splice(i, 1);
            break;
        }
    }
}

function Clear(directions){
    var ret = [];
    for (i in directions) {
        if (directions[i][0] > -1 && directions[i][0] < x && directions[i][1] > -1 && directions[i][1] < y) {
            ret.push(directions[i]);
        }
    }
    return ret;
}