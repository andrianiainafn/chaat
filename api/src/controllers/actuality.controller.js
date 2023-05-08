const mongoose = require('mongoose')
const actualityModel = require('../models/actuality.model')
const postsModel = require('../models/post.model')

exports.actuality = async(req,res)=>{
    try{
     const token = req.cookies.user
     if(!token){
        return res
        .status(403)
        .json({message: 'Unauthorized'})
     }        
     const actuality = await actualityModel.find().populate({
        path: 'actu',
        populate:{
            path: 'author'
        },
    })
     console.log(actuality.actu)
     res 
     .status(200)
     .json({message:'OK'})

    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:'Internal Srveur Error'})
    }
}