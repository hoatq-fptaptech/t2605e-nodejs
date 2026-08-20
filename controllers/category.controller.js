const Category = require("./../models/category.model");

exports.getAll = async (req,res)=>{
    try {
        const list = await Category.find().exec();
        res.json(list);// KO NÓI GÌ MẶC ĐỊNH STATUS 200
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
exports.create = async (req,res)=>{
    try {
        const data = req.body;
        const p = await Category.create(data);
        res.status(201).json(p);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
exports.update = async (req,res)=>{
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
}
exports.delete = async (req,res)=>{
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
}
exports.get = async (req,res)=>{
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
}