const route = require('express').Router();
const {create,get, reaction, checkReaction,getUserPost} = require('../controllers/posts.controller')
        
route.post('/create', create)
route.get('/getpost/:id',get)
route.put('/reaction/:post',reaction)
route.get('/checkReaction/:post',checkReaction)
route.get('/getUserPost/:userid',getUserPost)

module.exports = route