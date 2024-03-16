 const mongoose=require("mongoose")  
 
 exports.dbconnect=async (req,res)=>{
    try{
       await mongoose.connect(process.env.DBURL)
        console.log("db connected succesfully")
    }
    catch(error){
        console.log("db connection failed")
    }
 }