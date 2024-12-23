const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connection } = require("./config/db");
const UserRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const auth = require("./middleware/auth");

dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRouter);
app.use(auth);

app.use("/product", productRouter);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server is running on port", process.env.PORT);
});
