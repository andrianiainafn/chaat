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

exports.getAll = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const request = await userModel.find({id:payload.user_id}).select('request').populate({
            path:'request',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        const usersuggestions = await userModel.find()
        const myfriends = await userModel.find().select('friends').populate({
            path:'friends',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        res
        .status(200)
        .json({message: [request,usersugestions,myfriends]})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
} 
exports.getSuggestions = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const usersuggestions = await userModel.find()         
        res
        .status(200)
        .json({message: usersuggestions})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getFriendRequest = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const friendRequest = await userModel.find().select('friends').populate(
            {
                path:'friends',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            }
        ) 
        res
        .status(200)
        .json({message: friendRequest})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}