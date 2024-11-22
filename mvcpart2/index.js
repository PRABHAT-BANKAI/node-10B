const express = require("express");
const dashbaordRouter = require("./routes/dashboard");
const connection = require("./config/db");

const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use("/", dashbaordRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection();
  console.log("server is running on port");
});
