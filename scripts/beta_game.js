var sprites = {altar : ["------","|....|","------"], ball : [" ### ","#   #"," ### "], fragmentation_test : ["---------","|....","---------"], };

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

    clearScreen : function(){
        for (i = 0; i < graphics.max_x; i++) {
            var temp = [];
            for (j = 0; j < graphics.max_y; j++) {
                temp[j] = " ";
            }
            graphics.screen_array[i] = temp;
        }
    },

    loadSpriteOnArray : function(sprite, x=0, y=0) {
        x = Math.trunc(x);
        y = Math.trunc(y);
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

// Variable dictionary
var vars = {
    debug_counter : 1,
}

var gameObjects = {
    ball : {
        sprite : sprites.ball,
        x : 0,
        y : 0,
        xspeed : 1.5,
        yspeed : 1,
        move : function() {
            this.x += this.xspeed;
            this.y += this.yspeed;
        },

        checkCollision : function() {
            if (this.x + 5> graphics.max_x) {
                this.xspeed *= -1;
            }
            if (this.x < 0) {
                this.xspeed *= -1;
            }
            if (this.y + 3> graphics.max_y) {
                this.yspeed *= -1;
            }
            if (this.y < 0) {
                this.yspeed *= -1;
            }
        },

        draw : function() {
            graphics.loadSpriteOnArray(this.sprite, this.x, this.y)
        }
    }
}

// Here beggins all functions directly used in user inputs

function debug() {
    graphics.loadSpriteOnArray(sprites.fragmentation_test, (vars.debug_counter - 1) * 3, (vars.debug_counter - 1) * 3);
    vars.debug_counter++;
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
    updateGameObjects : function(){
        gameObjects.ball.move();
        gameObjects.ball.checkCollision();
    }
}

// These functions run every GLOBAL_TIMING miliseconds, drawing updates
var draw = {
    
    clearScreen : function(){
        graphics.clearScreen();
    },

    drawSpriteLayer : function name() {
        gameObjects.ball.draw();
    },

    updateScreen : function(){
        graphics.updateScreen();
    },

    drawScreen : function(){
        document.getElementById("main-screen").innerHTML = graphics.screen;
    },


}

// this seems rather cumbersome and silly taking in account how classes work... i don't care though