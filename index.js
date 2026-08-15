const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// kết nối mongodb
const stringconnection = "mongodb://localhost:27017/t2605e";
const mongoose = require("mongoose");
mongoose.connect(stringconnection).then(function(){
    // Báo hiệu
    console.log("Database connected!");
})
// IMPORT MODEL
const Product = require("./models/product.model");

// thêm cấu hình nhận dữ liệu
app.use(express.json());

app.listen(PORT,function(){
    // Báo hiệu
    console.log("Server is running...");
});

// route
app.get("/",function(req,res){
    res.send("Hello world!");
});
app.get("/about",(req,res)=>{
    res.send("About us");
})
// 5 api cho product
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
        const list = await Product.find().exec();
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
