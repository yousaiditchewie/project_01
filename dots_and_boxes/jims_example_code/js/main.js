console.log("linked");

var $square = $('.square');

$square.on('click', function(e) {
  if (e.offsetX < 0) {
    console.log('left border clicked of square ' + this.id);
  } else if (e.offsetX >= e.target.clientWidth) {
    console.log('right border clicked of square ' + this.id);
  } else if (e.offsetY < 0) {
    console.log('top border clicked of square ' + this.id);
  } else if (e.offsetY >= e.target.clientHeight) {
    console.log('bottom border clicked of square ' + this.id);
  }
});

/* SAMPLE CODE FROM EZRA */


// var player = 1;

// var board = [[0,0,0,0], [0,0,0,0]];

// function changeBoard(y, x) {
//   board[y][x] = player;
//   if (player === 1) {
//     player = -1;
//   } else {
//     player = 1;
//   }
//   console.log(board, player);
//   return board;
// }

// $('.square').on('click', function(e) {
//   if (e.offsetX < 0) {
//     console.log(parseInt(this.id.substring(3)), 3);
//     changeBoard(parseInt(this.id.substring(3)), 3);
//   } else if (e.offsetX >= e.target.clientWidth) {
//     console.log(parseInt(this.id.substring(3)), 1);
//     changeBoard(parseInt(this.id.substring(3)), 1);
//   } else if (e.offsetY < 0) {
//     console.log(parseInt(this.id.substring(3)), 0);
//     changeBoard(parseInt(this.id.substring(3)), 0);
//   } else if (e.offsetY >= e.target.clientHeight) {
//     console.log(parseInt(this.id.substring(3)), 2);
//     changeBoard(parseInt(this.id.substring(3)), 2);
//   }
// });
