var parent = require("./parent.js");


module.exports =class ToxicGas extends parent{

    constructor(x_y,dir){
        super(x_y[0],x_y[1]);
        this.Direction=dir;
        this.Timer = 3;
    }


    Move(){

        if (this.x == -1 || this.x == x || this.y == -1 || this.y == y) {
           this.RemoveFromArray([this.x,this.y],Arr_ToxicGas);
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
               this.RemoveFromArray([this.x,this.y],Arr_ToxicGas);
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
            else if(matrix[this.y][this.y]==4){
               this.RemoveFromArray([this.x,this.y],Arr_ArmedMan);
            }
            else if(floor(matrix[this.y][this.x])==5){
                return;
            }

        }
        else{
            matrix[this.y][this.x]=0;
           this.RemoveFromArray([this.x,this.y],Arr_ToxicGas);
        }
    }

    Draw(){
        matrix[this.y][this.x]=6;
    }

};
