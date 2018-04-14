module.exports = {
    Func1 : function RemoveFromArray(coords, array){
        for (var i in array) {
            if (array[i].x == coords[0] && array[i].y == coords[1]) {
                array.splice(i, 1);
                break;
            }
        }
    },

    Func2 : function Clear(directions){
        var ret = [];
        for (i in directions) {
            if (directions[i][0] > -1 && directions[i][0] < x && directions[i][1] > -1 && directions[i][1] < y) {
                ret.push(directions[i]);
            }
        }
        return ret;
    }
}