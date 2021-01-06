const GLOBAL_TIMING = 250;
var clock = setInterval(updateClock(d), GLOBAL_TIMING);

function updateClock(d){
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    coins++;
    document.getElementById("coins").innerHTML = coins;
}

var d = new Date();
var coins = 0;
