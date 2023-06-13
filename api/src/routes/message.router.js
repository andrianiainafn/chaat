const route = require('express').Router()
const {getmessage,searchmessage, deletemessage, addmessage, getLastMessage} = require('../controllers/message.controller')

route.get('/get/:conversation',getmessage)
route.get('/search/:conversation',searchmessage)
route.delete('/delete/:conversation',deletemessage)
route.post('/add/:conversation',addmessage)
route.get('/discu',getLastMessage)

module.exports = route