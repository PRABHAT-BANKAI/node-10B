const express = require("express");
const UserModel = require("../model/UserModel");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  res.render("dashboard");
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

dashboardRouter.get("/signIn", (req, res) => {
  res.render("signin");
});

module.exports = dashboardRouter;
