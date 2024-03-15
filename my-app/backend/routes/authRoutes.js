const express =require('express');
const router=express.Router();
const Signup=require('../controllers/Signup');
const Login = require('../controllers/Login');

router.post('/signup',Signup);
router.post('/login',Login);

module.exports=router;