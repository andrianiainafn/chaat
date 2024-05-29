const route = require('express').Router();
const {add,remove,get,modify, checkreaction,reaction} = require('../controllers/comment.controller');
const authMiddleware = require('../middelwares/auth.middelware');

route.get('/get/:post',authMiddleware, get);
route.post('/add',authMiddleware, add);
route.get('/checkreaction/:comment',authMiddleware, checkreaction)
route.put('/reaction/:comment',authMiddleware,reaction)
route.put('/modify/:comment',authMiddleware,modify)
route.delete('/delete/:comment',authMiddleware,remove)

module.exports = route;
