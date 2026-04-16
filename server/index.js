const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

// 👇 CORREGIDO
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const server = http.createServer(app);

// 👇 CORREGIDO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const { chatSocket } = require("./sockets/chatSocket");
chatSocket(io);

server.listen(4000, () => console.log("Server on http://localhost:4000"));
