var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var chat = require('./chatserver');

app.use(express.static(__dirname, '/public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', chat.onConnection);

http.listen(3000);
console.log('App started at port 3000');
