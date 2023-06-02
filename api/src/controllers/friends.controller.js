const userModel = require('../models/user.model')

exports.addFriends = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const {friendId} = req.body
        await userModel.updateOne(
            {id:friendId},
            {$push:{request: payload.user_id}}
        )
        res
        .status(200)
        .json({message: 'Request has sent successfully'})

    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.cancelFriendRequest = async(req,res)=>{
    try{
        res
        .status(200)
        .json({message: 'Request has sent successfully'})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}
exports.cancelFriendRequest = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})


        res
        .status(200)
        .json({message: 'Request has sent successfully'})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}
exports.DeleteFriendRequest = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        

        res
        .status(200)
        .json({message: 'Request has sent successfully'})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}
exports.getAllFriends = async(req,res)=>{
    try{

        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        res
        .status(200)
        .json({message: 'Request has sent successfully'})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}