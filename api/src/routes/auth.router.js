const route = require('express').Router();
const {register,verifySession,login} = require('../controllers/auth.controller');

route.post('/register', register);
route.get('/verify', verifySession)
route.post('/login',login)

module.exports = route;