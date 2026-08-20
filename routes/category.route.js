const express = require("express");
const categoryRouter = express.Router();
const controller = require("./../controllers/category.controller")
// 5 api cho category
// 1. CREATE
categoryRouter.post("/",controller.create );
// 2. LIST (READ DATA)
categoryRouter.get("/",controller.getAll);
// 3. UPDATE
categoryRouter.put("/:id",controller.update);
// 4. DELETE
categoryRouter.delete("/:id",controller.delete);
// 5. GET BY ID
categoryRouter.get("/:id",controller.get);
module.exports = categoryRouter;