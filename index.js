$(document).ready(() => {

  var boardArr = [];
  for (var i = 0; i < 3; i++) {
    // Add a row
    boardArr.push([]);
    for (var j = 0; j < 3; j++) {
      // Add a cell
      boardArr[i].push([0]);
    }
  }

  render();

  $('#renderButton').on('click', () => {
    render();
  });


  function render() {
    var tableBody = '';
    $.each(boardArr, function (k, v) {
      var tableRow = '';
      $.each(this, function (k, v) {
        tableRow += `<td>${v}</td>`;
      });
      tableBody += `<tr>${tableRow}</tr>`;
    });
    $('#app').html(tableBody);
    $('td').click(function () {
      var col = $(this).index();
      var row = $(this).closest('tr').index();
      boardArr[row][col]++;
      // debugger;
      render();
      console.log('index', row, col);
    });
  }

  // boardArr[1][1] = 234;
});