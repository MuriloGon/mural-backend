
const socketio = require('socket.io');

module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'Hello, wellcome to our chat!');
  socket.broadcast.emit('serverMessage', `OW! ${socket.id} is already connected! :D`);
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `OH! ${socket.id} We lost a warrior! :(`);
  });
}); 