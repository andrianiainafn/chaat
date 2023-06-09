const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

exports.deleteUsers = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const deletedUser = await userModel.deleteOne({_id:payload.user._id})
        if(deletedUser.deletedCount === 1){
            res
            .status(200)
            .json({message:"User deleted successfully"})
        }else{
            res
            .status(403)
            .json({message:"User not found"})
        }
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.modifyUserInfo = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const{firsname,lastname,email,phone,bio,profilepicture,couverture} = req.body
        const condition ={_id:payload.user_id}
        const newInformation = {
            firsname,
            lastname,
            email,
            bio,
            profilepicture,
            couverture
        }
        await userModel.updateOne(condition,{$set:newInformation})
        res
        .status(200)
        .json({message: 'User updated successfully'})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getUserInfo = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const user_id = req.params.userId
        const userInformation = await  userModel.findOne({_id: user_id}).select(
            ['firstname','lastname','email','birthday','biographie']
        )
        res 
        .status(200)
        .json({message: userInformation})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
