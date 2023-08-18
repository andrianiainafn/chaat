const conversationModel = require('../models/conversation.model')
const messageModel = require('../models/message.model')
const jwt = require('jsonwebtoken')

exports.getconversation = async(req,res)=>{
    try{
        const user_id = req.userId
        const allconversation = await conversationModel.find({
            $or:[
                {destination: user_id},
                {author: user_id}
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
        console.log(allconversation)
        res
        .status(200)
        .json({message: allconversation})
    }catch(e){
        res
        .status(500)
        .json({message:e.message})
    }
}
exports.getconversationinformation = async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        // jwt.verify(token,process.env.JWT_SECRET)
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
        const user_id = req.userId
        const newConversation = new conversationModel({
            destination,
            author: user_id
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

exports.getDefaultConversation = async(req,res)=>{
    try{
        const user_id = req.userId
        const getDefaultConversation = await messageModel.find({
            $or:[
                {author: user_id},
                {destination: user_id}
            ]
        }).sort({date:-1}).limit(1)
        res
        .status(200)
        .json({message:getDefaultConversation[0].conversation})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getDiscution = async (req,res)=>{
    try{
    const user_id = req.userId
    const getDiscution = await messageModel.aggregate([
        {
            $lookup: {
              from: 'messages',
              localField: '_id',
              foreignField: 'conversation',
              as: 'messages'
            }
          },
          {
            $unwind: '$messages'
          },
          {
            $sort: {
              'messages.date': -1
            }
          },
          {
            $group: {
              _id: '$_id',
              author: { $first: '$author' },
              destination: { $first: '$destination' },
              latestMessage: { $first: '$messages' }
            }
          },
          {
            $replaceRoot: {
              newRoot: '$latestMessage'
            }
          }
        ]);
    console.log(getDiscution,"discution")
    res 
    .status(200)
    .json({message: getDiscution})
    }catch(err){
        console.log(err)
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }

}