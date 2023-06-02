const userModel = require('../models/user.model')
const postModel = require('../models/post.model')
const page = require('../models/page.model')

exports.ReceiveNotification = async(req,res)=>{
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
        .json({message:'Internal Server Error'})
    }
}

