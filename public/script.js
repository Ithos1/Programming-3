


//type = prompt("1 - classic, 2 - custom, 3 - Grass simulation, 4 - Grass-eater simulation, 5 - Predator sim., 6 - Armed man sim., 7 - toxic bomb sim.");

var matrix = [[1,2]];

var x;
var y;
var side = 50;




/*
//normal

if(type == 1){
    matrix = [];
    x = 60;
    y = 60;
    side = 15;
    o = 800; //Starting grass count
    n = 400; //Starting grass-eater count
    m = 25; //Starting Meat-Eater count
}

//custom
else if(type == 2){

    matrix = [];
    x = prompt("x?");
    y = prompt("y?");
    side = prompt("side?");
    o = prompt("How much Grass?"); //Starting grass count
    n = prompt("How many Grass-eaters?"); //Starting grass-eater count
    m = prompt("How many Predators?");
    x = parseInt(x);
    y = parseInt(y);
    side = parseInt(side);
    o = parseInt(o);
    n = parseInt(n);
    m = parseInt(m);
}
//grass


else if(type == 3){
    o = 1;
    side = 100;
    y=5;
    x=5;
}
//grass-eater
else if(type == 4){
    o=24;
    n=1;
    y=5;
    x=5;
    side=100;
}

//meat-eater
else if(type ==5){
    o=10;
    n=14;
    m=1;
    y=5;
    x=5;
    side=100;
}

//Armed man

else if(type == 6){
    count_m = 29;
    m = 2;
    x=5;
    y=5;
    side=100;
}

//Toxic bomb

else if(type == 7){
    Count_B=49;
    x=5;
    y=5;
    side=100;
    o=1;
}
*/

//Matrix


function draw_h(data){
    matrix = data;
}





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

    socket.on("Draw", draw_h);


    /*
    if(Arr_Grass.length != test1){
        for (var l in Arr_Grass) {
            if (Arr_Grass[l].x == j && Arr_Grass[l].y == i) { Arr_Grass.splice(l, 1); }
        }
    }
    if(Arr_GrassEater.length != test2){
        for (f in Arr_GrassEater) {
            if (Arr_GrassEater[f].x == j && Arr_GrassEater[f].y == i) { Arr_GrassEater.splice(f, 1); }
        }
    }
    if(Arr_MeatEater.length != test3){
        for (var l in Arr_MeatEater) {
            if (Arr_MeatEater[l].x == j && Arr_MeatEater[l].y == i) { Arr_MeatEater.splice(l, 1); }
        }
    }

        test1=0;
        test2=0;
        test3=0;
        */
    }
    
