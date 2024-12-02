const express = require("express");
const UserModel = require("../model/UserModel");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  res.render("signIn");
});

dashboardRouter.get("/signup", (req, res) => {
  res.render("signup");
});

dashboardRouter.post("/insertData", async (req, res) => {
  console.log(req.body);
  try {
    await UserModel.create(req.body);
    console.log("User created");
    res.redirect("/signIn");
  } catch (err) {
    console.log(err);
  }
});

dashboardRouter.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

dashboardRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName);

  const getUserData = await UserModel.findOne({ userName: userName });
  if (getUserData) {
    if (getUserData.password !== password) {
      console.log("Invalid credentials");
      res.redirect("/");
      return;
    }
  } else {
    console.log("User not found");
    res.redirect("/");
    return;
  }

  res.redirect("/dashboard");

  console.log(getUserData);
});

module.exports = dashboardRouter;
