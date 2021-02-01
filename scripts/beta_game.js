var sprites = {altar : ["------","|....|","------"], ball : [" ### ","#...#"," ### "], fragmentation_test : ["---------","|....","---------"], };

var page = 1;

// graphics object
var graphics = {
    screen : "",        // what is sent to the html
    screen_array : [],  // buffer for screen
    max_x : 32,
    max_y : 15,
    updateScreen : function() {
        var string = '';
        for (y = 0; y < this.max_y; y++) {
            for (x = 0; x < this.max_x; x++) {
                string += this.screen_array[y][x];
            }
            string += '<br>';
            
        }
        this.screen = string;
    },

    clearScreen : function(){
        for (i = 0; i < graphics.max_y; i++) {
            var temp = [];
            for (j = 0; j < graphics.max_x; j++) {
                temp[j] = " ";
            }
            graphics.screen_array[i] = temp;
        }
    },

    loadSpriteOnArray : function(sprite, y=0, x=0) {
        x = Math.trunc(x);
        y = Math.trunc(y);
        for (i = 0; i < sprite.length; i++) {
            for (j = 0; j < sprite[i].length; j++){
                try {
                    this.screen_array[x + i][y + j] = sprite[i][j];
                }
                catch (e){  // prevents crashes when sprites are drawn outside the area
                    return;
                }
            }
        }
    },
}

var gameObjects = {
    ball : {
        sprite : sprites.ball,
        x : 3,
        y : 1,
        xspeed : 1.75,
        yspeed : 1,
        move : function() {
            this.x += this.xspeed;
            this.y += this.yspeed;
        },

        checkCollision : function() {           // for some reason i need those numbers ???, 
            if (this.x + 5 > graphics.max_x) {  // these are not actually the object's dimmension,
                this.xspeed *= -1;              // need to fix this some day, or maybe not
            }                                   // don't plan on clever animations anyway

            if (this.x - 1 < 0) {
                this.xspeed *= -1;
            }

            if (this.y + 4 > graphics.max_y){
                this.yspeed *= -1;
            }

            if (this.y < + 1){
                this.yspeed *= -1;
            }
        },

        draw : function() {
            graphics.loadSpriteOnArray(this.sprite, this.x, this.y)
        }
    }
}

var game = {

    logicUpdates : {
        updateGameObjects : function(){
            gameObjects.ball.move();
            gameObjects.ball.checkCollision();
        }
    },

    drawingUpdates : {
        clearScreen : function(){
            graphics.clearScreen();
        },
    
        drawSpriteLayer : function() {
            gameObjects.ball.draw();
        },
    
        updateScreen : function(){
            graphics.updateScreen();
        },
    
        updateHTML : function(){
            document.getElementById("main-screen").innerHTML = graphics.screen;
        },
    },
}

// updates the game
function updateGame(){
    for(key in game.logicUpdates){
        game.logicUpdates[key]();
    }
    for(key in game.drawingUpdates){
        game.drawingUpdates[key]();
    }
}

const GLOBAL_TIMING = 100;  // time in miliseconds
var clock = setInterval(updateGame, GLOBAL_TIMING);

// Here beggins all functions directly used in user inputs

function debug() {
    graphics.loadSpriteOnArray(sprites.fragmentation_test, (vars.debug_counter - 1) * 3, (vars.debug_counter - 1) * 3);
    vars.debug_counter++;
}

function changePage(id) {
    var pages = document.getElementsByClassName("side-menu-page")
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementById("page-" + id.innerHTML).style.display = "initial";
    
}

// this seems rather cumbersome and silly taking in account how classes work... i don't care though