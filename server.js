var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(3000);
const {Translate} = require('@google-cloud/translate');
app.use(express.static('public'));

console.log("Corriendo en el puerto 3000");
var io = socket(server);

io.sockets.on('connection', function (socket) {

    socket.on('start', function (data) {
        console.log('Un user se ha conectado');
    })

    socket.on('TxtRecibido', function(data){
        console.log("txtRecibido: "+data);

        socket.emit("TxtEnviado", data);
    })

})