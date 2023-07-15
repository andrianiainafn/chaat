const commentModel = require('../models/comment.model')
const jwt = require('jsonwebtoken')
const postsModel = require('../models/post.model')

exports.add = async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        const user_id = req.userId
        const {description,post} = req.body
        const newComment = new commentModel({
            author: user_id,
            description,
            post
        })
       const commmentSave = await newComment.save()
       await postsModel.updateOne(
            {_id: post},
            {$push: {comments: commmentSave._id}}
        )
       res
       .status(200)
       .json({message: 'Comment saved successfully'})

    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
}

exports.modify = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})

    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
} 

exports.remove = async(req,res)=>{
        try{
            const token = req.cookies.user
            if(!token){
                return res
                .status(401)
                .json({message:"Unauthorized"})
            }
            jwt.verify(token,process.env.JWT_SECRET)
            const payload = jwt.decode(token,options={"verify_signature": false})
            const comentId = req.params.comment
            const deletedComments = await commentModel.deleteOne({_id:comentId})
            if(deletedComments.deletedCount === 1){
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
            .json({message: e.message})
        }
}

exports.get = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        const postId = req.params.post
        const allComments = await postsModel.findOne({_id: postId}).select('comments').populate({
            path:'comments',
            populate:{
                path:'author',
                select:['firstname', 'lastname','profilepicture']
            }
        })
        res
        .status(200)
        .json({comments:allComments.comments})
        

    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
}
exports.reaction = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const commentId = req.params.comment
        const comments =  await commentModel.findOne({_id: commentId}).select('love').populate({
            path:'love',
            select: '_id'
        })
        const love = comments.love
        const idLove = love.filter(elem => JSON.stringify(elem._id) == JSON.stringify(payload.user_id))
        if(idLove.length > 0){
            await commentModel.updateOne(
                {_id: commentId},
                {$pull: {love: payload.user_id }}
            )
        }else{
            await commentModel.updateOne(
                {_id: commentId},
                {$push: {love: payload.user_id }}
            )
        }
        res
        .status(200)
        .json({message: "Reaction sent successfuly!!!"})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message: e.message})  
    }
}
exports.checkreaction = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const commentId = req.params['comment']
        const post = await commentModel.findOne({_id: commentId}).select('love').populate({
            path:'love',
            select: '_id'
        })
        const love =  post.love
        const reaction = love.map(elem=>{return elem._id})
        res
        .status(200)
        .json({message: reaction})
    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
}