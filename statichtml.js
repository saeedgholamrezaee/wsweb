const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5800;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
