const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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
