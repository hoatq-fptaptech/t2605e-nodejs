const express = require("express");
const router = express.Router();

const productRouter = require("./product.route");
const categoryRouter = require("./category.route");
const fileRouter = require("./file.route");
router.use("/product",productRouter);
router.use("/category",categoryRouter);
router.use("/file",fileRouter);

module.exports = router; 