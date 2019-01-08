var socket = io();
//Escuchar un evento con (on)
socket.on('connect', function() {
    console.log('conectado con el servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor')
});

//Enviar información  con (emit)
socket.emit('enviarMensaje', {
    usuario: 'Juan X.',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Response:', resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
})