const express = require("express");
const app = express();
// thêm cấu hình nhận dữ liệu
app.use(express.json());
// 5 api cho product
// IMPORT MODEL
const Product = require("./models/product.model");
// 1. CREATE
app.post("/api/product", async (req,res)=>{
    try {
        const data = req.body;
        const p = await Product.create(data);
        res.status(201).json(p);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 2. LIST (READ DATA)
app.get("/api/product",async (req,res)=>{
    try {
        const list = await Product.find().populate("category").exec();
        res.json(list);// KO NÓI GÌ MẶC ĐỊNH STATUS 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 3. UPDATE
app.put("/api/product/:id",async (req,res)=>{
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
app.delete("/api/product/:id",async (req,res)=>{
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
app.get("/api/product/:id",async (req,res)=>{
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

const Category = require("./models/category.model");
// 5 api cho category
// 1. CREATE
app.post("/api/category", async (req,res)=>{
    try {
        const data = req.body;
        const p = await Category.create(data);
        res.status(201).json(p);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 2. LIST (READ DATA)
app.get("/api/category",async (req,res)=>{
    try {
        const list = await Category.find().exec();
        res.json(list);// KO NÓI GÌ MẶC ĐỊNH STATUS 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
// 3. UPDATE
app.put("/api/category/:id",async (req,res)=>{
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
app.delete("/api/category/:id",async (req,res)=>{
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
app.get("/api/category/:id",async (req,res)=>{
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

module.exports = app;