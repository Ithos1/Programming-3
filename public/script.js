var Grass = require("./grass");
var GrassEater = require("./GR-E");
var MeatEater = require("./MT-E");
var ArmedMan = require("./AR-M");
var TimedBomb = require("./TB");
var ToxicGas = require("./T-G");
var Functions = require("./Functions");
var RemoveFromArray = Functions.Func1;
var Clear = Functions.Func2;


type = prompt("1 - classic, 2 - custom, 3 - Grass simulation, 4 - Grass-eater simulation, 5 - Predator sim., 6 - Armed man sim., 7 - toxic bomb sim.");



var matrix = [];
var x;
var y;
var side;

var o;
var n;
var m;

var x_m;
var y_m;
var x_m1;
var y_m1;
var dir;
var count_m = 0;

var Count_B = 0;
var B;



var test1 = 0;
var test2 = 0;
var test3 = 0;

var true_false = [true,false];

var Arr_Grass = [];
var Arr_GrassEater = [];
var Arr_MeatEater = [];
var Arr_ArmedMan = [];
var Arr_TimedBomb = [];
var Arr_ToxicGas = [];



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


//Matrix

var newtiles;
for (var i = 0; i < y; i++) {
    matrix[i] = [];
    for (var j = 0; j < x; j++) {
        matrix[i][j] = 0;
    }
}



//Setup-1

    
    //Grass
    while (o > 0) {
        var i = Math.floor(Math.random() * y);
        var j = Math.floor(Math.random() * x);
        if (matrix[i][j] == 0) {
            matrix[i][j] = 1;
            Arr_Grass.push(new Grass(j, i));
            o--;
        }
    }
    //Grass-Eater
    while (n > 0) {
        var i = Math.floor(Math.random() * y);
        var j = Math.floor(Math.random() * x);
        if (matrix[i][j] == 0) {
            matrix[i][j] = 2;
            Arr_GrassEater.push(new GrassEater(j, i));
            n--;
        }
    }
    //Meat-Eater
    while (m > 0) {
        var i = Math.floor(Math.random() * y);
        var j = Math.floor(Math.random() * x);
        if (matrix[i][j] == 0) {
            matrix[i][j] = 3;
            Arr_MeatEater.push(new MeatEater(j, i));
            m--;
        }
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

//Toxic Gas
    for (i in Arr_ToxicGas){
        Arr_ToxicGas[i].Move();
    }
    for (i in Arr_ToxicGas){
        Arr_ToxicGas[i].Draw();
    }

//Armed-Man
    for (i in Arr_ArmedMan){
        Arr_ArmedMan[i].Shoot();
        Arr_ArmedMan[i].Move();
    }
    if(count_m++ ==30){
        count_m=0;
        x_m = random(true_false);
        if(x_m){
            y_m1 = Math.round(random( 0, (y-1) ) );
            y_m = random(true_false);
            if(y_m){
                x_m1 = 0;
            }
            else{
                x_m1 = x-1;
            }
        }
        else{
            x_m1 = Math.round(random( 0, (x-1)));
            y_m = random(true_false);
            if(y_m){
                y_m1 = 0;
            }
            else{
                y_m1 = y-1;
            }
        }
        matrix[y_m1][x_m1] = 4;
        if(x_m){
            if(y_m){
                Arr_ArmedMan.push(new ArmedMan(x_m1,y_m1,"east"));
            }
            else{
                Arr_ArmedMan.push(new ArmedMan(x_m1,y_m1,"west"));
            }
        }
        else{
            if(y_m){
                Arr_ArmedMan.push(new ArmedMan(x_m1,y_m1,"south"));
            }
            else{
                Arr_ArmedMan.push(new ArmedMan(x_m1,y_m1,"north"));
            }
        }

        if(matrix[y_m1][x_m1]==1){
                RemoveFromArray([x_m1,y_m1],Arr_Grass);
            }
            else if(matrix[y_m1][x_m1]==2){
                RemoveFromArray([x_m1,y_m1],Arr_GrassEater);
            }
            else if(matrix[y_m1][x_m1]==3){
                RemoveFromArray([x_m1,y_m1],Arr_MeatEater);
            }
            else if(floor(matrix[y_m1][x_m1])==5){
                RemoveFromArray([x_m1,y_m1],Arr_TimedBomb);
            }
            else if(floor(matrix[y_m1][x_m1])==6){
                RemoveFromArray([x_m1,y_m1],Arr_ToxicGas);
            }
    }

    
    

    //Meat-eater
    for (i in Arr_MeatEater) {
        Arr_MeatEater[i].Move();
        if (Arr_MeatEater[i].Target) {
            if (Arr_MeatEater[i].Energy <= 0) {
                Arr_MeatEater[i].Energy = 1;
            }
            else {
                Arr_MeatEater[i].Energy++;
            }
        }
        else if (Arr_MeatEater[i].Energy >= 0) {
            Arr_MeatEater[i].Energy = -1;
        }
        else {
            Arr_MeatEater[i].Energy--;
        }
        Arr_MeatEater[i].Spread();

    }

    //Grass-eater
    for (i in Arr_GrassEater) {
        Arr_GrassEater[i].Move();
        if (Arr_GrassEater[i].Target) {
            if (Arr_GrassEater[i].Energy <= 0) {
                Arr_GrassEater[i].Energy = 1;
            }
            else {
                Arr_GrassEater[i].Energy++;
            }
        }
        else if (Arr_GrassEater[i].Energy >= 0) {
            Arr_GrassEater[i].Energy = -1;
        }
        else {
            Arr_GrassEater[i].Energy--;
        }
        Arr_GrassEater[i].Spread();
    }

    //Grass
    for (i in Arr_Grass) {
        Arr_Grass[i].Count++;
        Arr_Grass[i].Spread();
    }

    //Toxic Bomb

    if(Count_B++ ==50){
        Count_B = 0;
            x0 = floor(random(x));
            y0 = floor(random(y));
            Arr_TimedBomb.push(new TimedBomb(x0,y0));
            matrix[y0][x0]=5;

            if(matrix[y0][x0]==1){
                RemoveFromArray([x0,y0],Arr_Grass);
            }
            else if(matrix[y0][x0]==2){
                RemoveFromArray([x0,y0],Arr_GrassEater);
            }
            else if(matrix[y0][x0]==3){
                RemoveFromArray([x0,y0],Arr_MeatEater);
            }
            else if(matrix[y0][x0]==4){
                RemoveFromArray([x0,y0],Arr_ArmedMan);
            }
            else if(floor(matrix[y0][x0])==6){
                RemoveFromArray([x0,y0],Arr_ToxicGas);
            }
    }

    for (i in Arr_TimedBomb){
        Arr_TimedBomb[i].explode();
    }

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
    
