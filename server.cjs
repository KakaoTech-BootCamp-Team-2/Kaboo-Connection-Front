const express = require("express");
const http = require("http");
const SocketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", (roomName) => {
    const room = io.sockets.adapter.rooms.get(roomName) || { size: 0 };
    const numberOfClients = room.size;

    if (numberOfClients === 0) {
      socket.join(roomName);
      socket.emit("created", roomName, socket.id);
    } else if (numberOfClients === 1) {
      socket.join(roomName);
      io.to(roomName).emit("join", roomName);
      socket.emit("joined", roomName, socket.id);
    } else {
      socket.emit("full", roomName);
    }
  });

  socket.on("offer", (offer, roomName) => {
    socket.to(roomName).emit("offer", offer);
  });

  socket.on("answer", (answer, roomName) => {
    socket.to(roomName).emit("answer", answer);
  });

  socket.on("candidate", (candidate, roomName) => {
    socket.to(roomName).emit("candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
