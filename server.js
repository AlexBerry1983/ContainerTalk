var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);


app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));

io.on("connection", function(socket) { //like an event handler
  socket.on("game", (answer) => {
    // deal with new answers and emit to all clients
    // not hitting here
    io.sockets.emit("game", answer)
  })
})

io.on("connection", function(socket) { //like an event handler
  socket.on("game", (question) => {
    // deal with new questions and emit to all clients
    // not hitting here
    io.sockets.emit("game", question)
  })
})


var server = http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
