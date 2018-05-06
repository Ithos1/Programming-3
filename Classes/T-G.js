var Functions = require("./Functions");
var RemoveFromArray = Functions.Func1;
var Clear = Functions.Func2;

var parent = require("./parent.js");


modules.export =class ToxicGas extends parent{

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

};
