var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));



console.log("Corriendo en el puerto 3000");
var io = socket(server);
// API DE GOOGLE FREE
const translate = require('google-translate-api');

//FIN API DE GOOGLE FREE


io.sockets.on('connection', function (socket) {

  socket.on('start', function (data) {
    console.log('Un user se ha conectado');
  })

  socket.on('TxtRecibido', function (data) {
    console.log("txtRecibido: " + data);

    translate(data, {
      from: 'en',
      to: 'es'
    }).then(res => {
      socket.emit("TxtEnviado", res.text);
    }).catch(err => {
      console.error(err);
    });


  })

})