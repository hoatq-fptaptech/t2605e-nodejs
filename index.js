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
app.post("/api/product", async (req,res)=>{
    const data = req.body;
    const Product = require("./models/product.model");
    await Product.create(data);
    res.send("CREATED");
})
app.get("/api/product",async (req,res)=>{
    const Product = require("./models/product.model");
    const list = await Product.find().exec();    

    res.send(list);
})
app.get("/api/product/:id",(req,res)=>{
    const x = req.params.id;
    const data = {
        value: x
    };
    res.json(data);
})
app.get("/api/category/:catId/product/:id",(req,res)=>{
    const x = req.params.catId;
    const y= req.params.id;
    const data = {
        v1: x,
        v2: y
    }
    res.send(data);
})
