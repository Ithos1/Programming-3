module.exports = class Parent{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.directions;
        this.TargetNei = [];
        this.r = null;
        this.G = null;
    }

    radius_1_sml(){
        this.directions = [
                                    [this.x, this.y-1],
                [this.x-1, this.y],                     [this.x+1, this.y],
                                    [this.x, this.y+1]
        ];
    }
    radius_1(){
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
    radius_2(){
        this.directions = [
                                    [this.x,this.y-2],      [this.x+1,this.y-2],    [this.x+2,this.y-2],                
            [this.x-2,this.y-1],    [this.x-1,this.y-1],    [this.x,this.y-1],      [this.x+1,this.y-1],    [this.x+2,this.y-1],
            [this.x-2,this.y],      [this.x-1,this.y],                              [this.x+1,this.y],      [this.x+2,this.y],
            [this.x-2,this.y+2],    [this.x-1,this.y+2],    [this.x,this.y+2],      [this.x+1,this.y+2],    [this.x+2,this.y+2],                
                                    [this.x-1,this.y+1],    [this.x,this.y+1],      [this.x+1,this.y+1]
        ];
    }
    radius_2_sml(){
        this.directions = [
                                                            [this.x+1,this.y-2],
                                    [this.x-1,this.y-1],    [this.x,this.y-1],      [this.x+1,this.y-1],
            [this.x-2,this.y],      [this.x-1,this.y],                              [this.x+1,this.y],      [this.x+2,this.y],
                                    [this.x-1,this.y+2],    [this.x,this.y+2],      [this.x+1,this.y+2],         
                                                            [this.x,this.y+1]
        ]
    }
    radius_3(){this.directions = [
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
    radius_4(){
        this.directions = [
                                                            [this.x-2, this.y-4],   [this.x-1, this.y-4],   [this.x, this.y-4], [this.x+1, this.y-4],   [this.x+2, this.y-4],
                                    [this.x-3, this.y-3],   [this.x-2, this.y-3],   [this.x-1, this.y-3],   [this.x, this.y-3], [this.x+1, this.y-3],   [this.x+2, this.y-3],   [this.x+3, this.y-3],
            [this.x-4, this.y-2],   [this.x-3, this.y-2],   [this.x-2, this.y-2],   [this.x-1, this.y-2],   [this.x, this.y-2], [this.x+1, this.y-2],   [this.x+2, this.y-2],   [this.x+3, this.y-2],   [this.x+4, this.y-2],
            [this.x-4, this.y-1],   [this.x-3, this.y-1],   [this.x-2, this.y-1],   [this.x-1, this.y-1],   [this.x, this.y-1], [this.x+1, this.y-1],   [this.x+2, this.y-1],   [this.x+3, this.y-1],   [this.x+4, this.y-1],
            [this.x-4, this.y],     [this.x-3, this.y],     [this.x-2, this.y],     [this.x-1, this.y],                         [this.x+1, this.y],     [this.x+2, this.y],     [this.x+3, this.y],     [this.x+4, this.y],
            [this.x-4, this.y+1],   [this.x-3, this.y+1],   [this.x-2, this.y+1],   [this.x-1, this.y+1],   [this.x, this.y+1], [this.x+1, this.y+1],   [this.x+2, this.y+1],   [this.x+3, this.y+1],   [this.x+4, this.y+1],
            [this.x-4, this.y+2],   [this.x-3, this.y+2],   [this.x-2, this.y+2],   [this.x-1, this.y+2],   [this.x, this.y+2], [this.x+1, this.y+2],   [this.x+2, this.y+2],   [this.x+3, this.y+2],   [this.x+4, this.y+2],
                                    [this.x-3, this.y+3],   [this.x-2, this.y+3],   [this.x-1, this.y+3],   [this.x, this.y+3], [this.x+1, this.y+3],   [this.x+2, this.y+3],   [this.x+3, this.y+3],
                                                            [this.x-2, this.y+4],   [this.x-1, this.y+4],   [this.x, this.y+4], [this.x+1, this.y+4],   [this.x+2, this.y+4]

    ];
    }
    radius_5(){
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

        ];
    }

    FindTarget(Target_id, Searchelse = true){
        this.Target = false;
        for(var i in this.directions){
            if(floor(matrix[this.directions[i][1]][this.directions[i][0]]==food_id)){
                this.Target = true;
                break;
            }
        }
        if(this.Target){
            for(var i in this.directions){
                if(floor(matrix[this.directions[i][1]][this.directions[i][0]]==food_id)){
                    this.TargetNei.push(this.directions[i]);
                }
            }
        }
        else if(Searchelse){
            for( var i in this.directions){
                if(matrix[this.directions[i][1]][this.directions[i][0]]==0){
                    this.TargetNei.push(this.directions[i]);
                }
            }
        }
    }


   RemoveFromArray(coords, array){
        for (var i in array) {
            if (array[i].x == coords[0] && array[i].y == coords[1]) {
                array.splice(i, 1);
                break;
            }
        }
    }

    //FindFromArray(coords,)

    Clear(){
        var ret = [];
        for (var i in this.directions) {
            if (this.directions[i][0] > -1 && this.directions[i][0] < x && this.directions[i][1] > -1 && this.directions[i][1] < y) {
                ret.push(directions[i]);
            }
        }
        return ret;
    }

    Random(A=1,B=0){
        if(typeof(A)==Array){
            return A[Math.round(Math.random()*A.length)];
        }
        else{
            if(B>A){
                return ((Math.round(Math.random()*B))+A);
            }
            else{
                return ((Math.round(Math.random()*A))+B);
            }
        }
    }

    Choose_G(){
        this.r = this.Random()/2;
        if(this.r==0.5){
            this.G = "female";
        }
        else{
            this.G = "male";
        }
        matrix[this.y][this.x]+=this.r;
    }
};