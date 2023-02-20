const express=require('express');
const router=express.Router();
const userctrl=require('../controllers/userCtrl')

router.get('/',userctrl.userList)


module.exports=router;