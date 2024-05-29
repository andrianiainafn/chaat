const route = require('express').Router()
const {getUserInfo,modifyUserInfo,deleteUsers} = require('../controllers/user.controller')
const authMiddleware = require('../middelwares/auth.middelware')

route.get('/getUserInfo/:userId',authMiddleware, getUserInfo)
route.put('/modifyUserInfo', authMiddleware,modifyUserInfo)
route.delete('/deleteUsers', authMiddleware,deleteUsers)

module.exports = route;