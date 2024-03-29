const route = require('express').Router();
const {register,verifySession,login,verifyCode,logout} = require('../controllers/auth.controller');
const authMiddelware = require('../middelwares/auth.middelware');

route.post('/register', register);
route.get('/verify', authMiddelware,verifySession)
route.post('/login',login)
route.post('/confirmation',authMiddelware,verifyCode)
route.get('/logout',authMiddelware,logout)

module.exports = route;