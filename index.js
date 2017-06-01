const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});