const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const profile = multer({dest:'profile/'})
const cors= require('cors')
const logevent = require('./src/models/logevent.model')
const auth = require('./src/routes/auth.router') 
const session = require('express-session')
const cookieParser = require('cookie-parser')

//session
const oneDay = 1000 * 60 *60 * 24 
app.use(session({
    secret: "mysecrete",
    saveUninitialized: true,
    cookie:{maxAge: oneDay},
    resave: false
}))

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


app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})

//function to connect on mongodb
async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}
