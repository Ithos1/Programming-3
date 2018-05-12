var parent = require("./parent.js");

module.exports = class TimedBomb extends parent{
    constructor(x1,y1){
        super(x1,y1);
        this.Direction = this.Random(["east","west","north","south"]);
        this.Timer = Math.round(this.Random(5,10));
        
        this.radius_4();
        this.Clear();
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
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_Grass);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==2){
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_GrassEater);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==3){
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_MeatEater);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==4){
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_ArmedMan);
                }
                else if(floor(matrix[this.directions[i][1]][this.directions[i][0]])==5){
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_TimedBomb);
                }
                else if(matrix[this.directions[i][1]][this.directions[i][0]]==6){
                   this.RemoveFromArray([this.directions[i][0],this.directions[i][1]],Arr_ToxicGas);
                }
                matrix[this.directions[i][1]][this.directions[i][0]]=0;
            }
                
            this.ReleaseToxicGas();
            }
        }


    ReleaseToxicGas(){
        this.radius_2();
        this.Clear();
        for(var i in this.directions){
            matrix[this.directions[i][1]][this.directions[i][0]]=6;
            Arr_ToxicGas.push(new ToxicGas(this.directions[i],this.Direction));
        }
       this.RemoveFromArray([this.x,this.y],Arr_TimedBomb);
    }

};