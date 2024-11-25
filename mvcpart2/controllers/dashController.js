const StudentModel = require("../models/studentModel");

module.exports.homeDashboard =  async (req, res) => {
  const studentData = await StudentModel.find({});
  res.render("dashboard", { studentData });
}
module.exports.editData = async (req, res) => {
  try {
    await StudentModel.findByIdAndUpdate(req.params.id, req.body);
    console.log("data updated successfully");
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.redirect("back");
  }
};
