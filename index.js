const express = require('express')
const cors = require('cors');

const app = express();
const PORT = 3001
const server = require('http').createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
});

const sockets = require('./sockets');
sockets(io);


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))