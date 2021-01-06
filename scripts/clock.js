const GLOBAL_TIMING = 250;
var clock = setInterval(updateClock(), GLOBAL_TIMING);

function updateClock() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
var coins = 0;
