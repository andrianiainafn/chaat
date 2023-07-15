const route = require('express').Router()
const {getmessage,searchmessage, deletemessage, addmessage, getLastMessage} = require('../controllers/message.controller')
const authMiddleware = require('../middelwares/auth.middelware')

route.get('/get/:conversation',authMiddleware,getmessage)
route.get('/search/:conversation',authMiddleware,searchmessage)
route.delete('/delete/:conversation',authMiddleware,deletemessage)
route.post('/add/:conversation',authMiddleware,addmessage)
route.get('/discu',authMiddleware,getLastMessage)

module.exports = route