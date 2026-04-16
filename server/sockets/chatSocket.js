const users = {};

const chatSocket = (io) => {
  io.on("connection", (socket) => {
    socket.on("join", (username) => {
      if (!username) return;

      users[socket.id] = username;

      io.emit("user_list", Object.values(users));

      io.emit("receive_message", {
        user: "Sistema",
        text: `${username} se unió al chat`,
        time: new Date().toLocaleTimeString(),
      });
    });

    socket.on("send_message", (data) => {
      if (!data?.text) return;

      io.emit("receive_message", {
        user: users[socket.id] || "Anónimo",
        text: data.text,
        time: new Date().toLocaleTimeString(),
      });
    });

    socket.on("disconnect", () => {
      const username = users[socket.id] || "Anónimo";

      delete users[socket.id];

      io.emit("user_list", Object.values(users));

      io.emit("receive_message", {
        user: "Sistema",
        text: `${username} salió del chat`,
        time: new Date().toLocaleTimeString(),
      });
    });
  });
};

module.exports = { chatSocket };
