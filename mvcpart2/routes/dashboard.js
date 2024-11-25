const express = require("express");
const StudentModel = require("../models/studentModel");
const { editData, homeDashboard } = require("../controllers/dashController");

const dashbaordRouter = express.Router();

dashbaordRouter.get("/", homeDashboard);

dashbaordRouter.post("/insertData", async (req, res) => {
  console.log(req.body);
  try {
    await StudentModel.create(req.body);
    console.log("data added successfully");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("back");
    return;
  }
});

dashbaordRouter.get("/deleteData/:id", async (req, res) => {
  try {
    await StudentModel.findByIdAndDelete(req.params.id);
    console.log("data deleted successfully");
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.redirect("back");
  }
});

dashbaordRouter.get("/updateData/:id", async (req, res) => {
  try {
    const studentData = await StudentModel.findByIdAndUpdate(req.params.id);

    res.render("updateStudent", { studentData });
  } catch (err) {
    console.error(err);
    return res.redirect("back");
  }
});

dashbaordRouter.post("/editData/:id", editData);

module.exports = dashbaordRouter;
