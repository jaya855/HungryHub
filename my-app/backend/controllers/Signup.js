
const User=require("../models/User")
const Signup = async(req,res) => {
  try{
    const {name,email,address,password}=req.body;
    console.log("hello jaya from backend")
    console.log({name,email,address,password})
    if(!name || !email || !address || !password){
        return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
    }

    const emailGot=await User.findOne({email:email})
    if(emailGot){
        return res.status(400).json({
            success:false,
            message:"user already registered"
        })
    }
    
    

       await  User.create({name,email,address,password});
       console.log("hogya signup")
       return res.status(201).json({
            success: true,
            message: "user registration done successful"
        });
       
  }
  catch (error) {
    console.log("error while signing up")
    console.log(error.message)
    res.status(500).json({
        success: false,
        message: "user registration failed due to some interal server issues"
    });
   }
}
module.exports=Signup;

