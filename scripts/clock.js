const GLOBAL_TIMING = 100;
var clock = setInterval(updateAll, GLOBAL_TIMING);

// Updates all timed logic
function updateAll() {
    for(key in f){
        f[key]();
    }
}

// These functions run every GLOBAL_TIMING miliseconds
var f = {
    updateClock : function(){
        var d = new Date();
        document.getElementById("clock").innerHTML = "Time: " + d.toLocaleTimeString();
    },
    updateCoins : function(){
        document.getElementById("coins").innerHTML = "Coins: " + Math.trunc(vars.coins);
    },
    updateRate : function() {
        document.getElementById("rate").innerHTML = "Rate of Coins: " + (vars.rate * 10).toFixed(3) + " coins/s";
    },

    
    addCoins : function(){
        vars.coins += vars.rate
    },
}

// Variable dictionary
var vars = {
    coins : 0,
    rate : 0.01
}

// Here beggins all functions directly used in user inputs
function addRate() {
    vars.rate += 0.01;
}