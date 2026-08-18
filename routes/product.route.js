const express = require("express");
const productRouter = express.Router();

// 5 api cho product
// IMPORT MODEL
const Product = require("./../models/product.model");
// 1. CREATE
productRouter.post("/", async (req,res)=>{
    try {
        const data = req.body;
        const p = await Product.create(data);
        res.status(201).json(p);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 2. LIST (READ DATA)
productRouter.get("/",async (req,res)=>{
    try {
        const list = await Product.find().populate("category").exec();
        res.json(list);// KO NÓI GÌ MẶC ĐỊNH STATUS 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 3. UPDATE
productRouter.put("/:id",async (req,res)=>{
    try {
        const id = req.params.id; // ID của sp cần update
        const data = req.body; // dữ liệu update
        const p = await Product.findByIdAndUpdate(id,data,{
            new: false,
            runValidators: true
        });
        if(p){
            res.json(p);
        }else{
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
// 4. DELETE
productRouter.delete("/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const p = await Product.findByIdAndDelete(id);
        if(p){
            res.json({message: "Delete product successfully"});
        }else{
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 5. GET BY ID
productRouter.get("/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const p = await Product.findById(id);
        if(p){
            res.json(p);
        }else{
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = productRouter;