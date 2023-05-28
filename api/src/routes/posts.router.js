const route = require('express').Router();
const {create,get, reaction, checkReaction} = require('../controllers/posts.controller')
        
route.post('/create', create)
route.get('/getpost/:id',get)
route.put('/reaction/:post',reaction)
route.get('/checkReaction/:post',checkReaction)


module.exports = route