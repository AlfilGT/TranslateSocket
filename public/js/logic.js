if (annyang) {
    var commands = {
        '*tag': function (tag) {
            socket.emit('TxtRecibido', tag);
        }
    };
    annyang.setLanguage('es-CO');
    annyang.addCommands(commands);
    annyang.debug();
    annyang.start({
        continuous: false
    });
}


socket.on('TxtEnviado', function (data) {
    responsiveVoice.speak(data, "Spanish Latin American Female");
    $('#span-preview').html(data);
})

function a() {
    let lang = $("#LanguageSource option:selected").val();
    annyang.setLanguage(lang);
}