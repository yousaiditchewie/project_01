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

/* Compensate for the fact that some borders overlap by ensuring the values match for common borders


/* BEHAVIOR */

function play(y, x) {
  board[y][x] = player;
  if (player === 1) {
    player = -1;
  } else {
    player = 1;
  }
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
