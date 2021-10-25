const express = require('express');
const cors = require('cors');
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

io.on('sendToAll', (socket) => {
  console.log(socket)
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));