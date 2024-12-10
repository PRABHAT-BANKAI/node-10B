const express = require("express");
const UserModel = require("../model/UserModel");
const passport = require("../config/passport-local");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  // const cookieData = req.cookies["auth"];
  // if (cookieData) {

  // res.redirect("/dashboard");

  //   return;
  // }
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

dashboardRouter.get("/dashboard", passport.isAuth, (req, res) => {
  // const cookieData = req.cookies["auth"];
  // console.log(cookieData);
  // if (!cookieData) {
  // res.redirect("/");
  // }
  res.render("dashboard");
});

dashboardRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  async (req, res) => {
    try{
      req.flash("success", "login Successfully");
      return res.redirect("/dashboard");
    }catch(err){
      req.flash("error", "invalid login");
      console.log(err)
    }


  }
);

dashboardRouter.get("/viewAdmin", (req, res) => {
  const cookieData = req.cookies["auth"];
  if (cookieData) {
    res.render("viewAdmin");
    return;
  }
  res.render("signIn");
});

dashboardRouter.get("/changePassword", (req, res) => {
  res.render("changePassword");
});

dashboardRouter.post("/getChangePassword", (req, res) => {
  console.log(req.body);
});
dashboardRouter.get("/logout", (req, res) => {
  // res.clearCookie("auth");
  req.session.destroy(function (err) {
    // cannot access session here
    // console.log(err);
  });
  res.redirect("/");
});
module.exports = dashboardRouter;
