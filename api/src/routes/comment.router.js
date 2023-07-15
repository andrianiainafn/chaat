const route = require('express').Router();
const {add,remove,get,modify, checkreaction,reaction} = require('../controllers/comment.controller');
const authMiddleware = require('../middelwares/auth.middelware');

route.get('/get/:post', get);
route.post('/add',authMiddleware, add);
route.get('/checkreaction/:comment', checkreaction)
route.put('/reaction/:comment',reaction)
route.put('/modify/:comment',modify)
route.delete('/delete/:comment',remove)

module.exports = route;
