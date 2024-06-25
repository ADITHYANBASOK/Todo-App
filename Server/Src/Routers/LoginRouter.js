const express = require('express');
const bcrypt = require('bcryptjs');
const LoginModel = require('../Models/LoginModel');
const loginRouter=express.Router()


loginRouter.post('/login',async (req,res)=>{
    const email=req.body.email
    const password=req.body.password

    const exist=await LoginModel.findOne({Email:email})

    if(!exist){
        return res.status(400).json({
            sucess:false,
            false:true,
            message:"user is not exist"

        })
    }
    const ispasswordcorrect= await bcrypt.compare(password,exist.password)

    if(!ispasswordcorrect){
        return res.status(400).json({
            message:"password is not correct"
        })
    }
    else{
        return res.status(200).json({
            success:true,
            error:false,
            message:"Login successfully"
        })
    }
})