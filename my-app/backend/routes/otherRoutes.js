const express =require('express');

const router=express.Router();
const foodData=require('../controllers/FoodData');
const foodOrder=require('../controllers/foodOrder');
const history=require('../controllers/History');

router.get('/foodData',foodData);
router.post('/checkout',foodOrder);

router.get('/myOrder/:user',history);
module.exports=router;