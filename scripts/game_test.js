function updateClock(){
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    coins++;
    document.getElementById("coins").innerHTML = coins;
}

var d = new Date();
var coins = 0;