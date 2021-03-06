const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

http.listen(port, () => {
  console.log(`Text Chat App in running on ${port}`);
});

io.on("connection", (socket) => {
  socket.on("disconnection", () => {});
  socket.on("Created", (data) => {
    socket.broadcast.emit("Created", data);
  });
  socket.on("chat-message", (data) => {
    socket.broadcast.emit("chat-message", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
  socket.on("stopTyping", (data) => {
    socket.broadcast.emit("stopTyping", data);
  });
  socket.on("joined", (data) => {
    socket.broadcast.emit("joined", data);
  });
  socket.on("leaved", (data) => {
    socket.broadcast.emit("leaved", data);
  });
});
