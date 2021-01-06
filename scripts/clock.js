import updateClock from "game_test.js";

const GLOBAL_TIMING = 250;
var clock = setInterval(updateClock(), GLOBAL_TIMING);