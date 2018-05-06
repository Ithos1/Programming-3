var socket = io.connect('http://localhost:3000');


var matrix = [[]];

var x;
var y;
var side = 50;




function draw_h(data){
    matrix = data;
}



function Start(){
    matrix=data;
    //Setup
    function setup() {
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
        frameRate(1);
    }

    function draw() {
        


        //Draw
        for (var i in matrix) {
            for (var j in matrix[i]) {
                if (matrix[i][j] == 1) {
                    fill(0, 180, 0);
                    rect(side * j, side * i, side, side);
                    //test1++;
                }
                else if (matrix[i][j] == 2) {
                    fill(180, 180, 0);
                    rect(side * j, side * i, side, side);
                    //test2++;
                }
                else if (matrix[i][j] == 3) {
                    fill(180, 0, 0);
                    rect(side * j, side * i, side, side);
                    //test3++;
                }
                else if (matrix[i][j]==4){
                    fill(0,255,255);
                    rect(side * j, side * i, side, side);
                }
                else if (floor(matrix[i][j])==5){
                    if(matrix[i][j]==5){
                        fill(255,0,0);
                    }
                    else{
                        fill(0,0,0);
                    }
                    rect(side * j, side * i, side, side);
                }
                else if (matrix[i][j]==6){
                    fill(75,0,130);
                    rect(side * j, side * i, side, side);
                }
                else {
                    fill('#acacac');
                    rect(side * j, side * i, side, side);
                }
            }
        }
    }
}

    socket.on("Draw", draw_h);
    socket.on("initiate", Start);
