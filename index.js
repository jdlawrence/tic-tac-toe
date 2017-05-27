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
  boardArr[1][1] = 234;
  
  var tableBody = '';

  $.each(boardArr, function(k, v) {
    var tableRow = '';
    // console.log('this', k, v);
    $.each(this, function(k, v) {
      // console.log('something', something);
      tableRow += `<td>${v}</td>`;
    });
    tableBody += `<tr>${tableRow}</tr>`;
  });
  $('#app').append(tableBody);
});