const express = require("express");
const router = express.Router();

const productRouter = require("./product.route");
const categoryRouter = require("./category.route");

router.use("/product",productRouter);
router.use("/category",categoryRouter);

module.exports = router;