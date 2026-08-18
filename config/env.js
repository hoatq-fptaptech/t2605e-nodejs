require("dotenv").config(); // gọi đọc file .env
module.exports = {
    port: process.env.PORT || 3000,
    mongoUrl: process.env.MONGO_URL,
    nodeEnv: process.env.NODE_ENV
}