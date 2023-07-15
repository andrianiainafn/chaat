const mongoose = require('mongoose')
const postsModel = require('../models/post.model')
const actualityModel = require('../models/actuality.model')
const jwt = require('jsonwebtoken')
const postModel = require('../models/post.model')
const userModel = require('../models/user.model')

//creating a new posts
exports.create = async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        const user_id = req.userid
        const {description} = req.body
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        let imagesUrl = []
        if(req.files){
            imagesUrl = req.files.map(file=>file.path)
        }
        const post = new postsModel({
            author: user_id,
            description,
            media: imagesUrl,
        })
        const newPosts = await post.save()
        await userModel.updateOne(
            {_id: user_id},
            {$push: {media: {$each: imagesUrl}}}
        )
        const actuality = new actualityModel({
            actu: newPosts._id
        })
        await actuality.save()
        res
        .status(200)
        .json({message:"Posts created successfully"})

    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:e.message})
    }
}
exports.get = async (req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        const postId = req.params['id']
        const post = await  postsModel.findById(postId).populate({
            path:'author',
            select:['firstname', 'lastname','profilepicture']
        })
        res
        .status(200)
        .json({post})

    }catch(e){
        res
        .status(500)
        .json({message: e.message})
    }
}
exports.deletePosts= async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        const postId = req.params['post']
        const post = await postsModel.find({_id: postId})
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        const user_id =req.userId
        if(post.author !== user_id){
            return res
            .status(401)
            .json({message: "This posts is not yours"})
        }
        const deletedPost = await postsModel.deleteOne({_id: postId})
        if(deletedPost.deletedCount === 1){
            return res
            .status(200)
            .json({message: "Post deleted successfully!"})
        }else{
            return res
            .status(403)
            .json({message: "Eror! Something went wrong"})
        }

    }catch(e){
        res
        .status(500)
        json({message: e.message})
    }
}

exports.modify = async function(req, res){
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        const postId = req.params.post
        const post = await postsModel.find({_id: postId})
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        const user_id = req.userId
        if(post.author !== user_id){
            return res
            .status(401)
            .json({message: "This posts is not yours"})
        }
    }catch(e){
        res
        .status(500)
        json({message: e.message})
    }
}

exports.reaction = async (req, res) => {
    try {
      const user_id = req.userId;
      const postId = req.params.post;
      const post = await postsModel
        .findOne({ _id: postId })
        .select('love')
        .populate({
          path: 'love',
          select: '_id',
        });
  
      const love = post.love;
      console.log(postId);
      const idLove = love.filter(
        (elem) => JSON.stringify(elem._id) == JSON.stringify(user_id)
      );
  
      if (idLove.length > 0) {
        await postsModel.updateOne({ _id: postId }, { $pull: { love: user_id } });
      } else {
        await postsModel.updateOne({ _id: postId }, { $push: { love: user_id } });
      }
  
      res.status(200).json({ message: 'OK' });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
exports.checkReaction = async(req,res)=>{
    try{
    const postId = req.params['post']
    const post = await postsModel.findOne({_id: postId}).select('love').populate({
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
            .json({message:'Internal Server Error'})
    }
}
exports.getUserPost = async(req,res)=>{
    try{
        const user_id = req.params.userid
        const post = await postModel.find({author: user_id}).populate({
            path:'author',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        res
            .status(200)
            .json({message: post})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}

exports.savePost = async(req,res)=>{
    try{
        const user_id = req.userId
        const postid = req.params.post
        await userModel.updateOne(
            {_id: user_id},
            {$push:{saved: postid}}
        )
        res
            .status(200)
            .json({message:"Post saved successfully!!"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }   
}
exports.unsavePost = async(req,res)=>{
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
        const postid = req.params.post
        await userModel.updateOne(
            {_id: user_id},
            {$pull:{saved: postid}}
        )
        res
            .status(200)
            .json({message:"Post saved successfully!!"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}

exports.getSavedPost = async(req,res)=>{
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
        const savedPost = await userModel.findOne({_id: user_id}).select('saved').populate({
            path: 'saved',
            model:'post',
            populate:{
                path:'author',
                select:['firstname', 'lastname','profilepicture']
            }
        })
        res
        .status(200)
        .json({message: savedPost.saved})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.checkSaved = async(req,res)=>{
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
        const savedPost = await userModel.findOne({_id: user_id}).select('saved')
        console.log(savedPost)
        res
        .status(200)
        .json({message: savedPost.saved})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}