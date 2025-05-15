const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("express js web framework");
});


app.get("/dir", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Canvas Example</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h1>Simple HTML5 Canvas</h1>
  <canvas id="myCanvas" width="400" height="300"></canvas>

  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);

    // Draw a blue circle
    ctx.beginPath();
    ctx.arc(250, 150, 40, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
  </script>
</body>
</html>
`);
});

app.listen(5700, function(){
    console.log("web server run on port: 5700 ");
});
