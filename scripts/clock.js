const GLOBAL_TIMING = 100;
var clock = setInterval(updateAll, GLOBAL_TIMING);

function updateAll() {
    for(key in f){
        f[key]();
    }
}

function addRate() {
    dict.rate += 0.01;
}

var f = {
    updateClock : function(){
        var d = new Date();
        document.getElementById("clock").innerHTML = "Time: " + d.toLocaleTimeString();
    },
    updateCoins : function(){
        document.getElementById("coins").innerHTML = "Coins: " + Math.trunc(vars.coins);
    },
    updateRate : function() {
        document.getElementById("rate").innerHTML = "Rate of Coins: " + vars.rate;
    },

    
    addCoins : function(){
        vars.coins += vars.rate
    },
}

var vars = {
    coins : 0,
    rate : 0.01
}