function updateTime() {
    document.getElementById("time").innerHTML = Date.now();
}

var coin = 0;

function mineCoin() {
    coin++
    document.getElementById("coin").innerHTML = coin;
}