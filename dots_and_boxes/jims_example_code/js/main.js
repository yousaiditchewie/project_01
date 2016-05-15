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
