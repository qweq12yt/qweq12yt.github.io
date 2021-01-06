function updateTime() {
    document.getElementById("time").innerHTML = Date.now();
}

var coin = 0;

function mineCoin() {
    coin++
    document.getElementById("coin").innerHTML = coin;
}

class Resource {
    constructor(){
        this.total = 0;
    }

    addResource(){
        this.total++;
    }

    updateScreen(){
        document.getElementById("test").innerHTML = this.total;
    }
}