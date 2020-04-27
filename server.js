const express = require('express');
const app = express();

var bodyParser  = require("body-parser");

const http = require('http');
const server = http.Server(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var api = require('./routes/index')

const socketIO = require('socket.io');
const io = socketIO(server);
const port = process.env.PORT || '3500';
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chatProject', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>  console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.error(err));

//CORS
app.use(cors())

//Root endpoint
app.route('/')
	.get((req, res, next) => {res.json({ message: 'Bienvenido al servicio web del chat'});
});

//Api endpoints
app.use('/api', api);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('new-message', (message) => {
        io.emit('new-message', message);
        console.log(message);
    });
});

server.listen(port, () => {
    console.log(`Servidor web iniciado en el puerto: ${port}`);
});