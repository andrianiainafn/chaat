const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const conversationModel = require('../models/conversation.model')


exports.addFriends = async(req,res)=>{
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
        const friendid = req.params.request
        await userModel.updateOne(
            {_id:friendid},
            {$push:{request: user_id}}
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
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        const user_id = req.userId
        const requestId = req.params.request
        await userModel.updateOne(
            {_id: requestId},
            {$pull: {request: user_id}}
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
exports.AcceptFriendrequest = async(req,res)=>{
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
        const requestId = req.params.request
        console.log(requestId)
        const newConverstion = new conversationModel({
           author: requestId,
           destination: user_id      
        })
        Promise.all([
            userModel.updateOne(
                {_id: payload.user_id},
                {$pull: {request: requestId}}
            ),
            userModel.updateOne(
                {_id: requestId},
                {$push: {friends: user_id}}
            ),
            userModel.updateOne(
                {_id: payload.user_id},
                {$push: {friends: requestId}}
            ),
        ])
        .then(()=>{
            console.log("reussi!!!")
        })
        .catch((err)=>{
            console.log(err)
        })
        const conv = await newConverstion.save()
        console.log(conv)
        res
        .status(200)
        .json({message:"Ao amzay kosa ranga fa tsss!"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.DeleteFriendRequest = async(req,res)=>{
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
        const requestId = req.params.request
        await userModel.updateOne(
            {_id: user_id},
            {$pull: {request: requestId}}
        )
        res
        .status(200)
        .json({message: 'Delete request successfully'})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}
exports.checkFriendRequest = async(req,res)=>{
    try{
        // const token = req.cookies.user
        // if(!token){
        //     return res
        //     .status(401)
        //     .json({message:"Unauthorized"})
        // }
        // jwt.verify(token,process.env.JWT_SECRET)
        // const payload = jwt.decode(token,options={"verify_signature": false})
        // const user_id = req.userId
        const requestId = req.params.request
        console.log(requestId)
        const requestUserList = await userModel.findOne({_id: requestId}).select('request')
        const requestTofront = requestUserList.request.map(elem=>{return elem._id})
        res
        .status(200)
        .json({message: requestTofront})

    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getAllFriends = async(req,res)=>{
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
        const allfriends = await userModel.findOne({_id: user_id}).select('friends').populate({
            path:'friends',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        res
        .status(200)
        .json({message: allfriends})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}

exports.getAll = async(req,res)=>{
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
        const request = await userModel.findOne({_id: user_id}).select('request').populate({
            path:'request',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        const usersuggestions = await userModel.find({
            $and:[
                {_id:{$ne: user_id}},
                {request:{$nin:[payload.user_id]}},
                {friends:{$nin:[payload.user_id]}},
            ]
        })
        const myfriends = await userModel.findOne({_id: user_id}).select('friends').populate({
            path:'friends',
            model:'user',
            select:['firstname', 'lastname','profilepicture']
        })
        res
        .status(200)
        .json({message: [request.request,usersuggestions,myfriends.friends]})
    }catch(e){
        console.log(e)
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getSuggestions = async(req,res)=>{
    try {
        const user_id = req.userId;

        if (!user_id) {
            console.error("User ID is not defined");
            return res.status(400).json({ message: "User ID is required" });
        }

        console.log(`Fetching suggestions for user ID: ${user_id}`);

        const users = await userModel.find({
            _id: { $ne: user_id },
            requests: { $nin: [user_id] },
            friends: { $nin: [user_id] }
        });

        console.log(`Found ${users.length} user(s) for suggestions`);

        res.status(200).json(users);
    } catch (e) {
        console.error("Error fetching user suggestions:", e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.getFriendRequest = async(req,res)=>{
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
        const friendRequest = await userModel.findOne({_id: user_id}).select('request').populate(
            {
                path:'request',
                model:'user',
                select:['firstname', 'lastname','profilepicture']
            }
        ) 
        res
        .status(200)
        .json({message: friendRequest.request})
    }catch(e){
            res
            .status(500)
            .json({message:'Internal Server Error'})
    }
}