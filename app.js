var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Functions = require("./Classes/Functions");
var Parent = require("./Classes/parent");
var RemoveFromArray = Functions.Func1;
var Clear = Functions.Func2;

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


matrix = [];
x = 60;
y = 60;
side = 15;
o = 800; //Starting grass count
n = 400; //Starting grass-eater count
m = 25; //Starting Meat-Eater count

//Matrix

var newtiles;
for (var i = 0; i < y; i++) {
    matrix[i] = [];
    for (var j = 0; j < x; j++) {
        matrix[i][j] = 0;
    }
}

var Grass = require("./Classes/grass");
var GrassEater = require("./Classes/GR-E");
var MeatEater = require("./Classes/MT-E");
var ArmedMan = require("./Classes/AR-M");
var TimedBomb = require("./Classes/TB");

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


//Draw in Server


function DrawInServer(){ 
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
        x_m = true_false[Math.round(Math.random())];
        if(x_m){
            y_m1 = Math.round(Math.random( 0, (y-1) ) );
            y_m = true_false[Math.round(Math.random())];
            if(y_m){
                x_m1 = 0;
            }
            else{
                x_m1 = x-1;
            }
        }
        else{
            x_m1 = Math.round(Math.random( 0, (x-1)));
            y_m = true_false[Math.round(Math.random())];
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
               this.RemoveFromArray([x_m1,y_m1],Arr_Grass);
            }
            else if(matrix[y_m1][x_m1]==2){
               this.RemoveFromArray([x_m1,y_m1],Arr_GrassEater);
            }
            else if(matrix[y_m1][x_m1]==3){
               this.RemoveFromArray([x_m1,y_m1],Arr_MeatEater);
            }
            else if(floor(matrix[y_m1][x_m1])==5){
               this.RemoveFromArray([x_m1,y_m1],Arr_TimedBomb);
            }
            else if(floor(matrix[y_m1][x_m1])==6){
               this.RemoveFromArray([x_m1,y_m1],Arr_ToxicGas);
            }
    }

    
    

    //Meat-eater
    for (i in Arr_MeatEater) {
        if(Arr_MeatEater[i].G==null){
            Arr_MeatEater[i].Choose_G();
        }
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
        if(Arr_GrassEater[i].G==null){
            Arr_GrassEater[i].Choose_G();
        }
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
            x0 = Math.floor(Math.random()*x);
            y0 = Math.floor(Math.random()*y);
            Arr_TimedBomb.push(new TimedBomb(x0,y0));
            matrix[y0][x0]=5;

            if(matrix[y0][x0]==1){
               this.RemoveFromArray([x0,y0],Arr_Grass);
            }
            else if(matrix[y0][x0]==2){
               this.RemoveFromArray([x0,y0],Arr_GrassEater);
            }
            else if(matrix[y0][x0]==3){
               this.RemoveFromArray([x0,y0],Arr_MeatEater);
            }
            else if(matrix[y0][x0]==4){
               this.RemoveFromArray([x0,y0],Arr_ArmedMan);
            }
            else if(floor(matrix[y0][x0])==6){
               this.RemoveFromArray([x0,y0],Arr_ToxicGas);
            }
    }

    for (i in Arr_TimedBomb){
        Arr_TimedBomb[i].explode();
    }

    sockets.emit('Draw',matrix);
}



//Server

app.use(express.static("./public"));

app.get("/", function(req, res){
   res.redirect("./public");
});

server.listen(3000, function(){
   console.log("Example is running on port 3000");
});

io.on('connection', function(socket){
    socket.emit("initiate",matrix);
    setInterval(DrawInServer, 500);
    }
);

