var startPX = 202,
    startPY =385,
    ENEMY_StrtX = -80,
    ENEMY_StrtY = [50,142, 225];

//startEY = [1st cobble, 2nd cobble, 3rd cobble]
// All set for the middle of the block



// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = ENEMY_StrtX;
    this.y = ENEMY_StrtY[Math.floor(Math.random()*4)];


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
    movement = 100 * dt;
    this.x += movement;


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
    this.x = startPX;
    this.y = startPY;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//Movement of the player
Player.prototype.handleInput = function(key) {

if(key == 'up'){
    this.y -= 86;

} else if(key == 'down'){
    this.y -= -86;

} else if(key == 'left'){
    this.x += -101;

} else if(key == 'right'){
    this.x += 101;

} else if(player.x < 0 || ){

}
};

Player.prototype.update = function(){



};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [new Enemy, new Enemy, new Enemy];

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
