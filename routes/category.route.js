const express = require("express");
const categoryRouter = express.Router();


const Category = require("./../models/category.model");
// 5 api cho category
// 1. CREATE
categoryRouter.post("/", async (req,res)=>{
    try {
        const data = req.body;
        const p = await Category.create(data);
        res.status(201).json(p);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 2. LIST (READ DATA)
categoryRouter.get("/",async (req,res)=>{
    try {
        const list = await Category.find().exec();
        res.json(list);// KO NÓI GÌ MẶC ĐỊNH STATUS 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 3. UPDATE
categoryRouter.put("/:id",async (req,res)=>{
    try {
        const id = req.params.id; // ID của sp cần update
        const data = req.body; // dữ liệu update
        const p = await Category.findByIdAndUpdate(id,data,{
            new: false,
            runValidators: true
        });
        if(p){
            res.json(p);
        }else{
            res.status(404).json({message: "category not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
// 4. DELETE
categoryRouter.delete("/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const p = await Category.findByIdAndDelete(id);
        if(p){
            res.json({message: "Delete category successfully"});
        }else{
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 5. GET BY ID
categoryRouter.get("/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const p = await Category.findById(id);
        if(p){
            res.json(p);
        }else{
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
module.exports = categoryRouter;