const express = require("express");
const productRouter = express.Router();
const controller = require("./../controllers/product.controller");

// 1. CREATE
productRouter.post("/", controller.create);
// 2. LIST (READ DATA)
productRouter.get("/", controller.getAll);
// 3. UPDATE
productRouter.put("/:id", controller.update);
// 4. DELETE
productRouter.delete("/:id", controller.delete)
// 5. GET BY ID
productRouter.get("/:id", controller.get);

module.exports = productRouter;