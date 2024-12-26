const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: "Product Page" });
});

module.exports = productRouter;
