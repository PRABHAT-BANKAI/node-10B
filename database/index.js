const express = require("express");
const connection = require("./mongoose/db");
let port = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("addData");
});

app.post("/insertAddData", (req, res) => {
  console.log(req.body);
  res.redirect("back")
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log(`Server is running on port ${port}`);
});
