const route = require('express').Router()
const {getconversation,deleteconversation,createconversation} = require('../controllers/conversation.controller')

route.get('/getconversation/:userid',getconversation)
route.delete('/deleteconversation/:conversationid',deleteconversation)
route.post('/createconversation',createconversation)

module.exports = route