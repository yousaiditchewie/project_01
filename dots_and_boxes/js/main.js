console.log("linked");

/* MOODEL */

var player = 1; // value assigned to each square/border coordinate

var player1Score = 0
var player2Score = 0

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

/* make values match for overlapping borders */

function makeEqual() {
  // right borders for row 0
  board[0][1]  = board[1][3];
  board[1][1]  = board[2][3];
  board[2][1]  = board[3][3];
  // right borders for row 1
  board[4][1]  = board[5][3];
  board[5][1]  = board[6][3];
  board[6][1]  = board[7][3];
  // right borders for row 2;
  board[8][1]  = board[9][3];
  board[9][1]  = board[10][3];
  board[10][1] = board[11][3];
  // right borders for row 3
  board[12][1] = board[13][3];
  board[13][1] = board[14][3];
  board[14][1] = board[15][3];
  // bottom border for row 0
  board[0][2]  = board[4][0];
  board[1][2]  = board[5][0];
  board[2][2]  = board[6][0];
  board[3][3]  = board[7][0];
  // bottom border for row 1
  board[4][2]  = board[8][0];
  board[5][2]  = board[9][0];
  board[6][2]  = board[10][0];
  board[7][2]  = board[11][0];
  // bottom border for row 2
  board[8][2]  = board[12][0];
  board[9][2]  = board[13][0];
  board[10][2] = board[14][0];
  board[11][2] = board[15][0];
}
/* BEHAVIOR */

function play(y, x) {
  board[y][x] = player;
  if (player === 1) {
    player = -1;
  } else {
    player = 1;
  }
  makeEqual();
  console.log(player);
  return board;
}

// CLICK TO PLAY
$('.square').on('click', function(e) {
  if (e.offsetX < 0) {
    console.log(parseInt(this.id.substring(3)), 3);
    play(parseInt(this.id.substring(3)), 3);
  } else if (e.offsetX >= e.target.clientWidth) {
    console.log(parseInt(this.id.substring(3)), 1);
    play(parseInt(this.id.substring(3)), 1);
  } else if (e.offsetY < 0) {
    console.log(parseInt(this.id.substring(3)), 0);
    play(parseInt(this.id.substring(3)), 0);
  } else if (e.offsetY >= e.target.clientHeight) {
    console.log(parseInt(this.id.substring(3)), 2);
    play(parseInt(this.id.substring(3)), 2);
  }
});
