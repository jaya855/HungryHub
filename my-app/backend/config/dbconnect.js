 const mongoose=require("mongoose")  
 
 exports.dbconnect=async (req,res)=>{
    try{
       await mongoose.connect(process.env.DBURL,
            {
                useNewUrlParser : true,
                useUnifiedTopology : true,
            }
        )
        console.log("db connected succesfully")
    }
    catch(error){
        console.log("db connection failed")
    }
 }