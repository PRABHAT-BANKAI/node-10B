const express = require("express");
const connection = require("./config/db");
const UserModel = require("./models/userModel");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", async (req, res) => {
  const getUserData = await UserModel.find({});
  console.log(getUserData);
  res.render("home", { getUserData });
});

app.post("/addData", UserModel.uploadImage, async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    if (req.file) {
      req.body.image = UserModel.imagePath + "/" + req.file.filename;
      await UserModel.create(req.body);
      console.log("user created");
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
});

app.listen(8081, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server is running");
});
