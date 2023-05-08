const route = require('express').Router();
const {create} = require('../controllers/posts.controller')
        
route.post('/create', create)

module.exports = route