const app = require("express")();
let http = require("http").Server(app);

const port = process.env.PORT || 8000;
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(port, () => {
  console.log(`Text Chat App in running on ${port}`);
});
