const express = require("express");
const { connection } = require("./config/db");
const studentRouter = require("./routes/studentRoute");
const PORT = 8081;
const app = express();

app.use(express.urlencoded());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "received response" });
// });

app.use("/", studentRouter);
app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error starting server: ${error}`);
  } else {
    connection();
    console.log(`Server is connected ${PORT}`);
  }
});
