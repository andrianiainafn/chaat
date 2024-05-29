const route = require('express').Router()
const {ReceiveNotification} = require('../controllers/notification.controller')

route.post('/newnotification',ReceiveNotification)

module.exports = route