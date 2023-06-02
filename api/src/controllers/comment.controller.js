const commentModel = require('../models/comment.model')
const jwt = require('jsonwebtoken')
const postsModel = require('../models/post.model')

exports.add = async(req,res)=>{
    try{
        const token = req.cookies.user
        if(!token){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        jwt.verify(token,process.env.JWT_SECRET)
        const payload = jwt.decode(token,options={"verify_signature": false})
        const {descripion,post} = req.body
        const newComment = new commentModel({
            author: payload.user_id,
            descripion,
            post
        })
       const commmentSave = await newComment.save()
       await postsModel.updateOne(
        {_id: post},
        {$push: {comment: commmentSave._id}}
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
        console.log(allComments.comments)
        res
        .status(200)
        .json({comments:allComments.comments})
        

    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
}