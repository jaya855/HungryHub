const express = require("express")
const app=express()
const dotenv=require("dotenv")
const { dbconnect } = require("./config/dbconnect")
dotenv.config()
const cors=require("cors")
const authRoutes=require("./routes/authRoutes")
const otherRoutes=require("./routes/otherRoutes")
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.get("/",()=>{
    console.log("hello world")
})

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1",otherRoutes)

app.listen(PORT,(req,res)=>{
  console.log("app is listening at port ${PORT}")
})

dbconnect()