console.log("linked");
startGame();
// $('.line').addClass('p1-turn');
/* MOODEL */
var player; // value assigned to square/border coordinate
                // player toggles b/t 1-2
var player1Score;
var player2Score;
var gameStatus;
var board;
function startGame () {

  player = 1; // value assigned to square/border coordinate
                  // player toggles b/t 1-2

  player1Score = 0;
  player2Score = 0;
  gameStatus = "Game On!";
  board = [
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
  $('#player-turn').removeClass('p2');
  $('.line').removeClass('player1').removeClass('player2');
  $('.box').removeClass('boxPlayer1').removeClass('boxPlayer2');
  $('.line').removeClass('p1-turn').removeClass('p2-turn');
  $('.line').addClass('p1-turn');
}


// Score Board
function scoreBoard() {
  console.log("Player 1: " + player1Score);
  console.log("Player 2: " + player2Score);
}
/* make values match for overlapping borders */

function makeEqual() {
  for(var i = 0; i < 15; i++) {
    // right logic
    if(i !== 3 && i !== 7 && i !== 11) {
      if (board[i][1] !== 0 && board[i + 1][3] === 0) {
        board[i+1][3] = board[i][1];
      } else {
        board[i][1] = board[i+1][3];
      }
    }

    // bottom logic
    if (i < 12) {
      if (board[i+4][0] !== 0 && board[i][2] === 0) {
        board[i][2] = board[i+4][0];
      } else {
        board[i+4][0] = board[i][2];
      }
    }
  }
}
  // right border for row 0
  // board[0][1]  = board[1][3];
  // board[1][1]  = board[2][3];
  // board[2][1]  = board[3][3];
  // // right border for row 4
  // board[4][1]  = board[5][3];
  // board[5][1]  = board[6][3];
  // board[6][1]  = board[7][3];
  // // right border for row 8;
  // board[8][1]  = board[9][3];
  // board[9][1]  = board[10][3];
  // board[10][1] = board[11][3];
  // // right border for row 12
  // board[12][1] = board[13][3];
  // board[13][1] = board[14][3];
  // board[14][1] = board[15][3];
  // // bottom border for row 0
  // board[0][2]  = board[4][0];
  // board[1][2]  = board[5][0];
  // board[2][2]  = board[6][0];
  // board[3][2]  = board[7][0];
  // // bottom border for row 4
  // board[4][2]  = board[8][0];
  // board[5][2]  = board[9][0];
  // board[6][2]  = board[10][0];
  // board[7][2]  = board[11][0];
  // // bottom border for row 8
  // board[8][2]  = board[12][0];
  // board[9][2]  = board[13][0];
  // board[10][2] = board[14][0];
  // board[11][2] = board[15][0];

// Make a square "taken"
function taken1() {
  for (var i = 0; i < board.length; i++) {
    if (!board[i].includes(0)) {  // !!!doesn't work if one move completes 2 squares!!!
      $('#box' + i).addClass('boxPlayer' + player);
      board[i] = [player, player, player, player, 0];
      console.log(i + " got taken by " + player);
      if (player === 1) {
        player1Score += 1;
      } else {
        player2Score += 1
      }
      switchPlayer();
      break; // addresses issue where one play completing two squares
    }
          // assigns points to both players
  }
}
function taken2() {
  for (var i = 0; i < board.length; i++) {
    if (!board[i].includes(0)) {
      switchPlayer();
      $('#box' + i).addClass('boxPlayer' + player);
      board[i] = [player, player, player, player, 0];
      console.log(i + " got taken by " + player);
      if (player === 1) {
        player1Score += 1;
      } else {
        player2Score += 1
      }
      switchPlayer();
    }
  }
}

function switchPlayer() {
  player = player === 1 ? 2 : 1;
  $(".line").toggleClass("p1-turn");
  $(".line").toggleClass("p2-turn");
  $("#player-turn").toggleClass('p2');
}
// function taken() { // THIS IS A SKETCH, NOT A WORKING FUNCTION!!!
//   board.forEach(function(e, i) {
//     if(!(e.includes(0))) {
//       [i] = [player, player, player, player, 0];
//       console.log(i + " got taken by " + player);
//       if (player === 1) {
//         player1Score +=1;
//       } else {
//         player2Score += 1;
//       }
//       switchPlayer();
//     }
//   })
// }

// function taken() {
//   var isTaken = board.every(function(cell) {
//     return cell.includes(0);
//   })
//   if (!isTaken) {
//     cell = [player, player, player, player, 0];
//     switchPlayer();
//   }
// }


// Determine a winner
function winner() {
  if (player1Score > player2Score) {
    alert("Player 1 Wins!!!");
  } else if (player2Score > player1Score) {
    alert("Player 2 Wins!!!");
  } else {
    alert("It's a tie. Play agian!");
  }
}
// Determin if the game is over
function gameState() {
  var gameOver = board.every(function(cell) {
    return cell.length > 4;
  })
  if (gameOver) {
    winner();
  }
}
/* BEHAVIOR */

function play(y, x) {
  // Disable repeat plays to same space
  if (board[y][x] === 0) {
    board[y][x] = player;
    makeEqual();
    taken1();
    taken2();
    scoreBoard();
    gameState();
    switchPlayer();
    updateInfo();
  }
  console.log("Player " + player + "'s turn");
  return board;
}

function updateInfo() {

}

// RENDER

// var $line = $
//   // $(".line").addClass("p1-turn");
//   // function switchPlayer() {
//   //   $(".line").toggleClass("p1-turn");
//   //   $(".line").toggleClass("p2-turn");
//   // function render() { }

// CLICK TO PLAY

$('#board').on('click', '.line', function() {
  $(this).addClass('player' + player);
  idToBoard($(this).attr('id'));
  console.log($(this).attr('id'));
})

$('#restart').on('click', startGame);

function idToBoard(htmlID) {
  var selector = htmlID.substring(1).split(',');
  play(selector[0],selector[1]);
}
// $('.line').on('click', function(e) {
//   if (e.offsetX < 0) {
//     console.log(parseInt(this.id.substring(3)), 3);
//     play(parseInt(this.id.substring(3)), 3);
//   } else if (e.offsetX >= e.target.clientWidth) {
//     console.log(parseInt(this.id.substring(3)), 1);
//     play(parseInt(this.id.substring(3)), 1);
//   } else if (e.offsetY < 0) {
//     console.log(parseInt(this.id.substring(3)), 0);
//     play(parseInt(this.id.substring(3)), 0);
//   } else if (e.offsetY >= e.target.clientHeight) {
//     console.log(parseInt(this.id.substring(3)), 2);
//     play(parseInt(this.id.substring(3)), 2);
//   }
//   console.log(board);
// });
