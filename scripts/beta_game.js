const GLOBAL_TIMING = 100;  // time in miliseconds
var clock = setInterval(updateAll, GLOBAL_TIMING);

// graphics object
var graphics = {
    screen : "",        // what is sent to the html
    screen_array : [],  // buffer for screen
    max_y : 72,
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

    loadSpriteOnArray : function(sprite, x=0, y=0) {
        for (i = 0; i < sprite.length; i++) {
            for (j = 0; j < sprite[i].length; j++){
                try {
                    this.screen_array[x + i][y + j] = sprite[i][j];
                }
                catch (e){
                    return;
                }
            }
        }
    },


}
// Sets up graphics object's array
for (i = 0; i < graphics.max_x; i++) {
    var temp = [];
    for (j = 0; j < graphics.max_y; j++) {
        temp[j] = " ";
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
    graphics.loadSpriteOnArray(sprites.fragmentation_test, (vars.debug_counter - 1) * 3, (vars.debug_counter - 1) * 3);
    vars.debug_counter++;
}




// this seems rather cumbersome and silly taking in account how classes work... i don't care though
var sprites = {altar : ["------","|....|","------"], fragmentation_test : ["---------","|....","---------"], };
