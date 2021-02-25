const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 8000;
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(port, () => {
  console.log(`Text Chat App in running on ${port}`);
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("disconnect" , () => {
    console.log("DisConnect");
  })
});
