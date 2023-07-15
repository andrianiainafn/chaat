const route = require('express').Router()
const {getconversation,deleteconversation,createconversation,getconversationinformation, getDefaultConversation} = require('../controllers/conversation.controller')
const authMiddleware = require('../middelwares/auth.middelware')

route.get('/getconversation',authMiddleware,getconversation)
route.get('/getconversationinformation/:conversationid',authMiddleware,getconversationinformation)
route.delete('/deleteconversation/:conversationid',authMiddleware,deleteconversation)
route.post('/createconversation',authMiddleware,createconversation)
route.get('/getDefaultConversation',authMiddleware, getDefaultConversation)

module.exports = route