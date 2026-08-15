const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    slug:{
        type:String,
        required: true,
        unique: true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    }
})
module.exports = mongoose.model("Category",categorySchema);