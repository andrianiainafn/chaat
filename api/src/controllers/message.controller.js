const conversationModel = require('../models/conversation.model')
const messageModel = require('../models/message.model')
const groupemessageModel = require('../models/groupemessage.model')
const jwt = require('jsonwebtoken')

exports.addmessage = async(req,res)=>{
    try{
        const {destination,message} = req.body
        const conversation = req.params.conversation
        console.log(78787,conversation,78787)
        const user_id = req.userId
        const newMessage = new messageModel({
            author: user_id,
            destination,
            conversation,
            message,
            destinationModel:'user'
        })
        await newMessage.save()
        res 
        .status(200)
        .json({message:'message sent successfully'})
    }catch(err){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
} 

exports.getmessage = async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        const conversation = req.params.conversation
        const allMessages = await messageModel.find({conversation:conversation}).populate([
            {
                path:'author',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            },{
                path:'destination',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            }
        ])
        res
        .status(200)
        .json({message:allMessages})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.deletemessage = async(req,res)=>{
    try{
        const messageId = req.params['message']
        const message = await messageModel.findOne({_id: messageId}).populate({
            path:'author',
            model:'user',
            select:['firstname']
        })
        const user_id = req.userId
        if(message._id === user_id){
            return res
            .status(401)
            .json({message:"It' s not possible to delete this message"})
        }
        const deletingMessage = messageModel.deleteOne({_id: messageId})
        if(deletingMessage.deletedCount === 1){
            return res
            .status(200)
            .json({message:"Message deleted successfully"})
        }
        res
        .status(403)
        .json({message:"Error deleting message"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.searchmessage = async(req,res)=>{
    try{
        const wordkey = req.params['wordkey']
        const conversationId = req.params['conversation']
        const correspondingMessage =  await message.find({
            $and:[{conversation: conversationId},{message: `/${wordkey}/`}]
        })
        res
        .status(200)
        .json({message: correspondingMessage})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})  
    }
}

exports.getLastMessage = async(req,res)=>{
    try{
        const lastmessage = await messageModel.aggregate([
            { $sort: { date: -1 } },
            { $group: { _id: "$conversation", message: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$message" } },
            {
              $lookup: {
                from: 'users', // Assurez-vous que le nom de la collection est correct
                localField: 'author',
                foreignField: '_id',
                as: 'authorInfo'
              }
            },
            {
              $lookup: {
                from: 'users', // Assurez-vous que le nom de la collection est correct
                localField: 'destination',
                foreignField: '_id',
                as: 'destinationInfo'
              }
            }
          ])
          
       
        console.log(lastmessage,90909)
        res
        .status(200)
        .json({message: lastmessage})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})  
    }
}
exports.getArrivalMessage = async (req,res)=>{
    try{
        const arrivalMessage = await messageModel.find({
            $and:[{destination:req.userId},{statu:false}]
        }).select('_id')
        res 
        .status(200)
        .json({message: arrivalMessage})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})  
    }
}