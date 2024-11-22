const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://127.0.0.1/databaseDashboard");
  console.log("database is connected");
};

module.exports = connection;