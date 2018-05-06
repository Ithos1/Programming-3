
var parent = require("./parent.js");

module.exports = class Grass extends parent{
    constructor(x1, y1) {
        super(x1,y1);
        this.SpreadingTemp = 2;
        this.TargetNei = [];
        this.Count = 0;

        this.radius_1();

    }

    GetTarget() {
        this.TargetNei = [];
        this.directions = this.Clear();
        for (var i in this.directions) {
            if (matrix[this.directions[i][1]][this.directions[i][0]] == 0) {
                this.TargetNei.push(this.directions[i]);
            }
        }
    }

    Spread() {
        if (this.Count >= this.SpreadingTemp) {
            this.GetTarget();
            var i = this.this.Random(this.TargetNei);
            if (i) {
                matrix[i[1]][i[0]] = 1;
                Arr_Grass.push(new Grass(i[0], i[1]));
                this.Count = 0;
            }
        }
    }



};