const route = require('express').Router()
const {actuality} = require('../controllers/actuality.controller')

route.get('/', actuality)
module.exports = route