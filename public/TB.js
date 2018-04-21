module.exports = class TimedBomb{
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

        ];
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
        ];
        this.directions = Clear(this.directions);
        for(var i in this.directions){
            matrix[this.directions[i][1]][this.directions[i][0]]=6;
            Arr_ToxicGas.push(new ToxicGas(this.directions[i],this.Direction));
        }
        RemoveFromArray([this.x,this.y],Arr_TimedBomb);
    }

};