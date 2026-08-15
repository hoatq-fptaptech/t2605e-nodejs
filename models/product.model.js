const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // đinhj nghĩa các dữ liệu của 1 sản phẩm
    title: {
        // định nghĩa kỹ hơn cho thông tin này
        type: String,
        required: [true, "Please enter a valid title"]
    },
    // code:{
    //     type:String,
    //     unique: true
    // }, 
    price: {
        type: Number,
        required: [true,"Nhập cái giá tiền vào!"],
        min:0
    },
    thumbnail: String,
    description: String,
    stock: {
        type: Number,
        required: true,
        min:0
    }
})
module.exports = mongoose.model("Product",productSchema);