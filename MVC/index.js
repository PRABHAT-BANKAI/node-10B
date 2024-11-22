const express = require("express");
const contentRouter = require("./Routes/content");
const aboutRouter = require("./Routes/about");
const homeRouter = require("./Routes/home");

const app = express();
const port = 8080;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
app.use("/", contentRouter);
app.use("/", aboutRouter);
app.use("/", homeRouter);
app.listen(port, (error) => {
  if (error) {
    console.log(`Error starting server: ${error}`);
  }
  console.log(`Server running at http://localhost:${port}`);
});
