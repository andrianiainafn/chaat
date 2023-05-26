const route = require('express').Router();
const {create,get, reaction} = require('../controllers/posts.controller')
        
route.post('/create', create)
route.get('/getpost/:id',get)
route.put('/reaction/:post',reaction)

module.exports = route