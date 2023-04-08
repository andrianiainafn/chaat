const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRouter = require('./Routes/auth')
const multer = require('multer')
const profile = multer({dest:'profile/'})
const cors= require('cors')
const cookieParser  = require('cookie-parser')

dotenv.config()