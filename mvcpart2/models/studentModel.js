const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const imagePath = "/uploads";
const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", imagePath));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

studentSchema.statics.uploadImage = multer({ storage: storage }).single(
  // middleware
  "image"
);
studentSchema.statics.imagePath = imagePath;

const StudentModel = mongoose.model("studentData", studentSchema);

module.exports = StudentModel;
