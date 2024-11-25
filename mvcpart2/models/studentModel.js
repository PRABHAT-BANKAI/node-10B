const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StudentModel = mongoose.model("studentData", studentSchema);

module.exports = StudentModel;
