class field {
    constructor(value, id){
        this.value = value;
        this.id = id;
    }
}

function updateLogic() {
    var dict = logic;
    for(var key in dict){
        dict[key]();
    }
}

function updateScreen() {
    var dict = fields;
    for(var key in dict){
        var field = dict[key];
        document.getElementById(field.id).innerHTML = field.value;
    }
}

var d = new Date();
var currentTime = "";
var coin = 0;
var rate = 1;

var logic = {
    updateClock : function() {
        currentTime = d.toLocaleTimeString();
    },

    addCoin : function(x) {
        coin += rate
    }
}

var fields = {
    clock: new field(currentTime, "clock"),
    coins: new field(coin, "coins")
}