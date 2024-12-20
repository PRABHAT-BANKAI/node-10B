const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connection } = require("./config/db");
const UserRouter = require("./routes/userRouter");

dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRouter);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server is running on port", process.env.PORT);
});
