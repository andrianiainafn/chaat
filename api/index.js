const express = require('express');
const app = express();
const socketio = require('socket.io');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const profile = multer({dest:'profile/'})
const postImage = multer({dest:'posts/'})
const media = multer({dest:'media/'})
const commentImage = multer({dest:'comments/'})
const cors= require('cors')
const auth = require('./src/routes/auth.router') 
const actuality = require('./src/routes/actuality.router')
const posts = require('./src/routes/posts.router')
const comment = require('./src/routes/comment.router')
const friend = require('./src/routes/friends.router')
const notification = require('./src/routes/notification.router')
const message = require('./src/routes/message.router')
const user = require('./src/routes/user.router')
const conversation = require('./src/routes/conversation.router')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const postsocket = require('./src/sockets/posts.socket');
const messagesocket = require('./src/sockets/messsage.socket')

//session
const oneDay = 1000 * 60 *60 * 24 
app.use(session({
    secret: "mysecrete",
    saveUninitialized: true,
    cookie:{maxAge: oneDay},
    resave: false
}))

app.use('/posts',express.static('posts'))

//authorization to use req.body
app.use(express.json())

//Connection avec La BD
dotenv.config();
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connected successfully');})
.catch(err => console.log(err));

//authorization
app.use(cors({
    origin:['http://localhost:3000','https://chaat-afn.netlify.app'],
    credentials: true
}))
app.use(cookieParser())

//Routes
app.use('/auth/',auth)
app.use('/post/',postImage.array('images',4),posts)
app.use('/actuality', actuality)
app.use('/comment',commentImage.single('image'),comment)
app.use('/friend',friend)
app.use('/notification',notification)
app.use('/user',profile.array('images',2),user)
app.use('/message',media.single('media'),message)
app.use('/conversation',conversation)

const socket = app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})
const io = socketio(socket,{cors:{
    origin:['http://localhost:3000','https://chaat-afn.netlify.app'],
    credentials: true,  
}});

//socket
postsocket(io)
messagesocket(io)

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}

