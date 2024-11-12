const express = require("express");
const connection = require("./mongoose/db");
const UserModel = require("./model/userModel");
let port = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", async (req, res) => {
  try {
    const userData = await UserModel.find({});

    res.render("addData", { userData });
  } catch (err) {
    console.log(err);
  }
});

app.post("/insertAddData", async (req, res) => {
  // console.log(req.body);
  // const { userName, password } = req.body;
  // console.log(userName, password);
  try {
    await UserModel.create(req.body);
    console.log("Data inserted successfully");
  } catch (err) {
    console.log(err);
  }

  res.redirect("back");
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log(`Server is running on port ${port}`);
});
