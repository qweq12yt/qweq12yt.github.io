function updateClock(){
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

var d = new Date();
