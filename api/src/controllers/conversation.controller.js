const conversationModel = require('../models/conversation.model')
const jwt = require('jsonwebtoken')

exports.getconversation = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const allconversation = await conversationModel.find({
            $or:[
                {destination: payload.user_id},
                {author: payload.user_id}
            ]
        }).populate([
            {
                path:'destination',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            },{
                path:'author',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            }
        ])
        console.log(payload.user_id)
        console.log(allconversation)
        res
        .status(200)
        .json({message: allconversation})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getconversationinformation = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const conversationId = req.params.conversationid
        const conversation = await conversationModel.findOne({_id:conversationId}).populate([
            {
                path:'destination',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            },{
                path:'author',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            }
        ])
        res
        .status(200)
        .json({message: conversation})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}

exports.createconversation = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        const {destination} = req.body
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const newConversation = new conversationModel({
            destination,
            author: payload.user_id
        })
        await newConversation.save()
        res
        .status(200)
        .json({message:"conversation created successfully"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}

exports.deleteconversation = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        const conversationId = req.params['conversation']
        const deletingConversation = await conversationModel.deleteOne({id:conversationId})
        if(deletingConversation.deletedCount === 1){
            res
            .status(200)
            .json({message:"Deleting conversation successfully"})
        }
        else{
            res
            .status(400)
            .json({message:"Error when deleting conversation"})
        }
    }
    catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
