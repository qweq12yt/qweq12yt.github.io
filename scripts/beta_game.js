const GLOBAL_TIMING = 100;  // time in miliseconds
var clock = setInterval(updateAll, GLOBAL_TIMING);

import("./sprites.js")

// graphics object
var graphics = {
    screen : "",        // what is sent to the html
    screen_array : [],  // buffer for screen
    max_y : 73,
    max_x : 26,
    updateScreen : function() {
        var string = '';
        for (x = 0; x < this.max_x; x++) {
            for (y = 0; y < this.max_y; y++) {
                string += this.screen_array[x][y];
            }
            string += '<br>';
            
        }
        this.screen = string;
    },

    loadAscii : function() {
        file = new FileReader()
        this.temp = file;
        
    },
    temp : undefined,
}
// Sets up graphics object's array
for (i = 0; i < graphics.max_x; i++) {
    var temp = [];
    for (j = 0; j < graphics.max_y; j++) {
        temp[j] = "" + (j % 10);
    }
    graphics.screen_array[i] = temp;
}

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

}

// These functions run every GLOBAL_TIMING miliseconds, drawing updates
var draw = {

    updateScreen : function(){
        graphics.updateScreen();
    },

    drawScreen : function(){
        document.getElementById("main-screen").innerHTML = graphics.screen;
    }
}

// Variable dictionary
var vars = {
    coins : 0,
    rate : 0.01,
    cursor_hidden : false,

    debug_counter : 1,
}



// Here beggins all functions directly used in user inputs
function addRate() {
    vars.rate += 0.01;
}

function debug() {
    graphics.loadAscii();
}




// this seems rather cumbersome and silly taking in account how classes work... i don't care though

