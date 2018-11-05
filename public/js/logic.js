if (annyang) {
    var commands = {
        '*tag': function (tag) {socket.emit('TxtRecibido', tag);}
    };
    annyang.setLanguage('es-CO');
    annyang.addCommands(commands);
    annyang.debug();
    annyang.start({
        continuous: true
    });
}


socket.on('TxtEnviado', function (data) {
    responsiveVoice.speak(data);
    $('#span-preview').html(data);
})

var msg = new SpeechSynthesisUtterance('Hello');
window.speechSynthesis.speak(msg);