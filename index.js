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
  console.log("Connected");
  socket.on("disconnection" , () => {
    console.log("DisConnect");
  })
  socket.on("Created" , (data) => {
    socket.broadcast.emit("Created", (data))
  })
});
