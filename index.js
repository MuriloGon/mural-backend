const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
=======
const cors = require('cors'); 

>>>>>>> aa8393f2211360132174be9e846565065ce97009
const app = express();

const http = require('http').createServer(app);

app.use(express.json());
app.use(cors({ origin: '*' }));

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
  }});

io.on('connection', (socket) => {
  console.log('new user')

  io.emit('receiveMsg', 'nova mensagem')


});
require('./sockets/index')

io.on('sendToAll', (socket) => {
  console.log(socket)
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));