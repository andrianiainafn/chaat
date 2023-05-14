const route = require('express').Router();
const {create,get} = require('../controllers/posts.controller')
        
route.post('/create', create)
route.get('/getpost/:id',get)

module.exports = route