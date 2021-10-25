const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 3001
const server = require('http').createServer(app);


const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
});

const votesSocket = require('./sockets');
votesSocket(io);


app.use(cors());

// app.get('/languages', async (req, res) => {
//   const languages = await Language.getAll();
//   res.status(200).json(languages);
// });

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))