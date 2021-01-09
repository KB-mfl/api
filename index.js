const express = require("express")

const app = express();

app.get("/",async (req,res)=>{
  res.send("ok")
})

app.listen(3000,()=>{
  console.log("hello world")
})