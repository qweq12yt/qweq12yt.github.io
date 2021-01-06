const GLOBAL_TIMING = 100;
var clock = setInterval(updateAll, GLOBAL_TIMING);

function updateAll() {
    for(key in dict){
        dict[key]();
    }
}

function addRate() {
    dict.rate += 0.01;
}

var dict = {
    updateClock : function(){
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    },
    updateCoins : function(){
        document.getElementById("coins").innerHTML = Math.trunc(coins);
    },
    
    addCoins : function(){
        this.coins += this.rate
    },

    
    coins : 0,
    rate : 0.01
}