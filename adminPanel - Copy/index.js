const express = require("express");
const dashboardRouter = require("./routes/dashboardRoute");
const path = require("path");
const connection = require("./config/db");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const PassportStrategy = require("./config/passport-local");

const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/", dashboardRouter);

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  connection();
  console.log("Server is running on port 8080");
});
