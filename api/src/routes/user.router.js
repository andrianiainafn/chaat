const route = require('express').Router()
const {getUserInfo,modifyUserInfo,deleteUsers} = require('../controllers/user.controller')

route.get('/getUserInfo/:userId', getUserInfo)
route.put('/modifyUserInfo', modifyUserInfo)
route.delete('/deleteUsers', deleteUsers)

module.exports = route;