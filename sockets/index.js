
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Cliente ${socket.id} acabou de entrar`);

    socket.on('sendToAll', (data) => {
      console.log( `${data.username}: ${data.message}`);
      io.sockets.emit('serverMessage', `${data.username}: ${data.message}`);
    });

    socket.on('disconnect', (socket) => {
      console.log(`Cliente ${socket.id} acabou de saiu`);
    });
  });

}