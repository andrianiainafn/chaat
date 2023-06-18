const route = require('express').Router()
const {getconversation,deleteconversation,createconversation,getconversationinformation, getDefaultConversation} = require('../controllers/conversation.controller')

route.get('/getconversation',getconversation)
route.get('/getconversationinformation/:conversationid',getconversationinformation)
route.delete('/deleteconversation/:conversationid',deleteconversation)
route.post('/createconversation',createconversation)
route.get('/getDefaultConversation', getDefaultConversation)

module.exports = route