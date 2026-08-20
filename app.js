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

const router = require("./routes/router");
app.use("/api",router);

module.exports = app;