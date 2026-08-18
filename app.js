const express = require("express");
const app = express();
// thêm cấu hình nhận dữ liệu
app.use(express.json());

const router = require("./routes/router");
app.use("/api",router);

module.exports = app;