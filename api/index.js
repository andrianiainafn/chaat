const express = require('express');
const app = express();
const socketio = require('socket.io');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const profile = multer({dest:'profile/'})
const postImage = multer({dest:'posts/'})
const cors= require('cors')
const auth = require('./src/routes/auth.router') 
const actuality = require('./src/routes/actuality.router')
const posts = require('./src/routes/posts.router')
const comment = require('./src/routes/comment.router')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const {create} = require('./src/sockets/posts.socket'); 
const { text } = require('body-parser');

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
    origin:['http://localhost:3000'],
    credentials: true
}))
app.use(cookieParser())

//Routes
app.use('/auth/',auth)
app.use('/post/',postImage.array('images',4),posts)
app.use('/actuality', actuality)
app.use('/comment',comment)

const socket = app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})
const io = socketio(socket,{cors:{
    origin:['http://localhost:3000'],
    credentials: true
}});
io.on('connect', (socket)=>{
    console.log('userconnected')
    io.emit('welcom','hello this is socekt')
    socket.on('hello',(text)=>console.log(text))
})



//function to connect on mongodb
async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}