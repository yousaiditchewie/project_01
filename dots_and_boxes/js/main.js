console.log("linked");

/* MOODEL */

// 1. Each player takes turns clicking between dots which connects them.
// 2. Once a player has completed a square (even if they did not make all borders of that square), the square belongs to that player.
// 3. When the board is filled, the player with the most squares wins.

/* Game Board */
// I think the board will need to be an array of objects.
// This will allow for the top, right, bottom, and left of each square to have a unique value.
// When the T,R,B, and L values add to a certain amount, the square is filled and the previous player gets the point

var $board = $("board")


