const express = require("express");

const dashbaordRouter = express.Router();

dashbaordRouter.get("/", (req, res) => {
  res.render("dashboard");
});


module.exports = dashbaordRouter;
