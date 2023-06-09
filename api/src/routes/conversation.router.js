const route = require('express').Router()
const {getconversation,deleteconversation,createconversation,getconversationinformation} = require('../controllers/conversation.controller')

route.get('/getconversation',getconversation)
route.get('/getconversationinformation/:conversationid',getconversationinformation)
route.delete('/deleteconversation/:conversationid',deleteconversation)
route.post('/createconversation',createconversation)

module.exports = route