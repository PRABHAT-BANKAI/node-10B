const express = require("express");
const dashbaordRouter = require("./routes/dashboard");
const connection = require("./config/db");
const path = require("path");
const app = express();
const port = 8084;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/", dashbaordRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection();
  console.log("server is running on port");
});
