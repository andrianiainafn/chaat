const route = require('express').Router();
const {register,verifySession,login,verifyCode} = require('../controllers/auth.controller');

route.post('/register', register);
route.get('/verify', verifySession)
route.post('/login',login)
route.post('/confirmation',verifyCode)

module.exports = route;