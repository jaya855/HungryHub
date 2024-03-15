const User=require("../models/User")

const Login = async(req,res) => {
    console.log("hello login backend")
  try{
     console.log("hello from backend login")
     
     const {email,password}=req.body
     console.log({email,password})
     if(!email || !password){
        return res.status(401).json({
            success:false,
            message:"all fields are required"
        })
     }
     const userfound= await User.findOne({email:email})
     if(!userfound){
        return res.status(404).json({
            success:false,
            message:"user not found"
        })
     }

     if(userfound.password !== password){
        return res.status(403).json({
            success:false,
            message:"password is wrong"
        })
     }
     return res.status(201).json({
        success:true,
        message:"successfully logged in"
     })
  }
  catch(error){ 
    console.log("error while loggin in")
    console.log(error.message)
    res.status(500).json({
        success: false,
        message: "user logged in failed due to some interal server issues"
    });
  }
}

module.exports=Login;


