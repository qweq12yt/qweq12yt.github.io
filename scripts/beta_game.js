const GLOBAL_TIMING = 100;
var clock = setInterval(updateAll, GLOBAL_TIMING);

// Updates all timed logic
function updateAll() {
    for(key in logic){
        logic[key]();
    }
    for(key in draw){
        draw[key]();
    }
}

// These functions run every GLOBAL_TIMING miliseconds, logic updates
var logic = {
    accumulateCoins : function(){
        vars.coins += vars.rate;
    },
    blinkCursor : function(){
        vars.cursor_hidden = ! vars.cursor_hidden;
    },
    modifyScreenState : function() {
        if (vars.cursor_hidden) {
            graphics.screen_state = ">>> WAITING FOR INPUT ";
        }
        else {
            graphics.screen_state = ">>> WAITING FOR INPUT _";
        }
    }

}

// These functions run every GLOBAL_TIMING miliseconds, drawing updates
var draw = {
    drawScreen : function(){
        document.getElementById("main-screen").innerHTML = graphics.screen_state;
    }
}

// Variable dictionary
var vars = {
    coins : 0,
    rate : 0.01,
    cursor_hidden : false
}

// ascii graphics dictionary
var graphics = {
    screen_state : ">>> WAITING FOR INPUT _"
}

// Here beggins all functions directly used in user inputs
function addRate() {
    vars.rate += 0.01;
}


// this seems rather cumbersome and silly taking in account how classes work... i don't care though