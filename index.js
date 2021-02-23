const app = require("express")();
let http = require("http").Server(app);

const port = process.env.PORT || 8000;

app.get("/" , (req,res) => {
    res.send("Hello From Home")
})

http.listen(port, () => {
  console.log(`Text Chat App in running on ${port}`);
});
