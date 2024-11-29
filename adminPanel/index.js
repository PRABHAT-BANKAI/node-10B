const express = require("express");
const dashboardRouter = require("./routes/dashboardRoute");
const path = require("path");
const connection = require("./config/db");

const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded());

app.use("/", dashboardRouter);

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
 connection()
  console.log("Server is running on port 8080");
});
