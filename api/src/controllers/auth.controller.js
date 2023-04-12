const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const speackeasy = require('speakeasy')
const logevent = require('../models/logevent.model');
const userModel = require('../models/user.model');

dotenv.config()

//sinup
exports.register = async(req,res)=>{
    try{
        const {email,password,lname,fname,birth,gender} = req.body
        if(!email || !password || !lname || !fname || !birth || !gender){
            return res
            .status(400)
            .json({message:"Please enter the required information"})
        }
        const existingUser = await user.findOne({email})
        if(existingUser){
            return res
            .status(401)
            .json({message:"An account with this email is already exists"})
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            firstname: fname,
            lastname: lname,
            password: passwordHash,
            email: email,
            birthday: birth,
            gender: gender
        })
        const user = await newUser.save()
        const token = jwt.sign({
            user_id: user._id
        },process.env.JWT_SECRET)
        const codeverification = speackeasy.totp({
            secret: process.env.JWT_SECRET,
            encoding: 'base32'
        })
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.EMAIL_MY,
                pass:process.env.PASSWORD_MY
            }
        })
        const mailOptions = {
            from: 'fanomezantsoanomenandrianiaina@gmail.com',
            to: `${email}`,
            subject: 'Email confirmation',
            text:`Hey ${lname} your code is ${codeverification}`
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.error(err)
                return true
            }else{
                console.log('Email sent: ' + info.response)
                throw new Error(`Impossile d' envoyer l' email a ${email}`)
            }
        })
        const newLogevent = new logevent({
            createdAt: new Date(),
            author: user._id,
            code: codeverification
        })   
        const test = await newLogevent.save()
        console.log(test)
        req.session.user = 'test'
        res.send()
    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:"Error registering"})
    }
}

//login
exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password ){
            return res
            .status(400)
            .json({message:"Please enter the required information"})
        }
        const userInfo = await userModel.findOne({email})
        if(!userInfo){
            return res
            .status(401)
            .json({message:"Votre email ne correspond a aucun compte"})
        }
        const compare = await bcrypt.compare(userInfo.password,password)
        if(!compare){
            return res
            .status(401)
            .json({message:"wron password"})
        }
        res 
        .status(200)
        .json({message:"login successfully!!"})

    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:"Error login"})
    }
}

exports.verifySession = async(req,res)=>{
    try{
        console.log(req.session)
        res
        .status(200)
        .json({connected: true})
    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:'Error when get session value'})
    }
}