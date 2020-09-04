
const {io} = require('../index')
//mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');
    client.on('disconenct', () => {
        console.log('cliente desconectado');
    })
    //escuchar mensajes
    client.on('mensaje', (payload) => {
        console.log('mensajes', payload.nombre);

        //enviar a todos
        io.emit('mensaje', { admin: 'nuevo mensaje' });
    })
    //emitir mensajes

})
