console.log("linked");

/* MOODEL */

var player = 1; // value assigned to each square/border coordinate


var board = [
            [0,0,0,0], // box 0
            [0,0,0,0], // box 1
            [0,0,0,0], // box 2
            [0,0,0,0], // box 3
            [0,0,0,0], // box 4
            [0,0,0,0], // box 5
            [0,0,0,0], // box 6
            [0,0,0,0], // box 7
            [0,0,0,0], // box 8
            [0,0,0,0], // box 9
            [0,0,0,0], // box 10
            [0,0,0,0], // box 11
            [0,0,0,0], // box 12
            [0,0,0,0], // box 13
            [0,0,0,0], // box 14
            [0,0,0,0]  // box 15
            ];


/* BEHAVIOR */
function play(y, x) {
  board[y][x] = player;
  if (player === 1) {
    player = -1;
  } else {
    player = 1;
  }
  console.log(board, player);
  return board;
}
