var PLAYER_STRTX = 404,
    PLAYER_STRTY = 467.5,
    ENEMY_StrtX = -80,
    ENEMY_Speed = [250, 300, 400, 1000, 500, 1500],
    ENEMY_StrtY = [142, 225, 308, 391];

//startEY = [1st cobble, 2nd cobble, 3rd cobble]
// All set for the middle of the block



// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = ENEMY_StrtX;
    this.y = ENEMY_StrtY[Math.floor(Math.random()*4)];
    this.speed = ENEMY_Speed[Math.floor(Math.random()*6)];


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 950)
    {
        this.x = ENEMY_StrtX;
        this.y = ENEMY_StrtY[Math.floor(Math.random()*4)];
        this.speed = ENEMY_Speed[Math.floor(Math.random()* 6)];
    }
    this.x = this.x + (this.speed*dt);


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

//This is where the player originally spawns when the game loads
    this.x = PLAYER_STRTX;
    this.y = PLAYER_STRTY;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//Movement of the player
Player.prototype.handleInput = function(key) {

if(key == 'up'){
    if(this.y != -48.5){
        this.y -= 86;
    }

} else if(key == 'down'){
    if(this.y != 467.5){
        this.y -= -86;
    }

} else if(key == 'left'){
    if( this.x != 0){
        this.x += -101;
    }

} else if(key == 'right'){
    if( this.x != 808){
        this.x += 101;
    }

}
};

Player.prototype.update = function(){



};

Player.prototype.resetPosition = function() {
    this.x = PLAYER_STRTX;
    this.y = PLAYER_STRTY;
    this.sprite = 'images/char-boy.png';
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [new Enemy, new Enemy, new Enemy, new Enemy, new Enemy, new Enemy, new Enemy, new Enemy, new Enemy];

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
