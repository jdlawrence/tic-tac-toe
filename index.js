$(document).ready(() => {
  console.log('hiiiiii');


  var boardArr = [];
  for (var i = 0; i < 3; i++) {
    // Add a row
    boardArr.push([]); 
    for (var j = 0; j < 3; j++) {
      // Add a cell
      boardArr[i].push([0]);
    }
  }

  $('tr').map(row => {
    console.log('row', typeof row);
  });
  
});