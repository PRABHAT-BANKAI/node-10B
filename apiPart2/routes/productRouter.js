const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {

  // const todolist = await todomodel.find().popuplate("usertodolist")
  res.status(200).json({ message: "Product Page" });
});

module.exports = productRouter;
