$(document).ready(() => {

  var boardArr = [];
  var xTurn = true;
  function initializeBoardArr() {
    boardArr = [];
    for (var i = 0; i < 3; i++) {
      // Add a row
      boardArr.push([]);
      for (var j = 0; j < 3; j++) {
        // Add a cell
        boardArr[i].push('-');
      }
    }
  }

  render();

  $('#resetButton').on('click', () => {
    initializeBoardArr();
    xTurn = true;
    render();
  });

  function weHaveAWinner(boardArr) {
    var result = false;

    // Rows
    function checkRow(row) {
      return row[0] === 'X' && row[1] === 'X' && row[2] === 'X' ||
             row[0] === 'O' && row[1] === 'O' && row[2] === 'O';
    }

    for (var i = 0; i < boardArr.length; i++) {
      if (checkRow(boardArr[i])) {
        result = true; 
      }
    }

    // Columns
    function checkCol(col) {
      return boardArr[0][col] === 'X' && boardArr[1][col] === 'X' && boardArr[2][col] === 'X' ||
             boardArr[0][col] === 'O' && boardArr[1][col] === 'O' && boardArr[2][col] === 'O';
    }
    for (var j = 0; j < boardArr[0].length; j++) {
      if (checkCol(j)) {
        result = true;
      }
    }
    
    // Diagonals
    // Main diagonal
    if (boardArr[0][0] === 'X' && boardArr[1][1] === 'X' && boardArr[2][2] === 'X' || 
        boardArr[0][0] === 'O' && boardArr[1][1] === 'O' && boardArr[2][2] === 'O') {
      result = true;
    }
    
    if (boardArr[0][2] === 'X' && boardArr[1][1] === 'X' && boardArr[2][0] === 'X' || 
        boardArr[0][2] === 'O' && boardArr[1][1] === 'O' && boardArr[2][0] === 'O') {
      result = true;    
    }
    return result;
  }


  function setClickEvent() {
    $('td').click(function () {
      console.log('objecti');
      var col = $(this).index();
      var row = $(this).closest('tr').index();

      // X vs O logic
      if (boardArr[row][col] === '-') {
        boardArr[row][col] = xTurn ? 'X' : 'O';
        xTurn = !xTurn;
      }

      render();
      console.log('Has someone won?', weHaveAWinner(boardArr));
    });
  }

  function render() {
    var tableBody = '';
    $.each(boardArr, function (k, v) {
      var tableRow = '';
      $.each(this, function (k, v) {
        tableRow += `<td class="column">${v}</td>`;
      });
      tableBody += `<tr class="">${tableRow}</tr>`;
    });
    $('#app').html(tableBody);
    setClickEvent();
  }

  // boardArr[1][1] = 234;
});