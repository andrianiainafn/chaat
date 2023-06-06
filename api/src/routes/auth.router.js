const route = require('express').Router();
const {register,verifySession,login,verifyCode,logout} = require('../controllers/auth.controller');

route.post('/register', register);
route.get('/verify', verifySession)
route.post('/login',login)
route.post('/confirmation',verifyCode)
route.get('/logout',logout)

module.exports = route;