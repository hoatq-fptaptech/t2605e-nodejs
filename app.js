const express = require("express");
const app = express();
// cấu hình CORS
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
})
);
// thêm cấu hình nhận dữ liệu
app.use(express.json());
//public file
app.use(express.static("public"));

const router = require("./routes/router");
app.use("/api",router);
// tạo trang chủ trả về giao diện reactjs
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
module.exports = app;