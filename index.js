const express = require('express')
const path = require('path')
require('dotenv').config();

//App de express
const app = express();

//NODE SERVER SOCKET
const server = require('http').createServer(app)
module.exports.io =  require('socket.io')(server);
require('./sockets/socket')




//path publico
const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));


server.listen(process.env.PORT || 3000, (err) => {
    if(err) throw new Error(err)
    console.log(`App listening on port ${process.env.PORT}`);
});