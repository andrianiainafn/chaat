const route = require('express').Router();
const {add,remove,get,modify} = require('../controllers/comment.controller');

route.get('/get', get);
route.post('/add', add);

module.exports = route;
