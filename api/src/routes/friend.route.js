const route = require('express').Router()
const {DeleteFriendRequest,cancelFriendRequest,addFriends,getAllFriends} = require('../controllers/friends.controller')

route.delete('/DeleteFriendRequest',DeleteFriendRequest)
route.put('/addFriends',addFriends)
route.put('/CancelFriendRequest',cancelFriendRequest)
route.get('/getAllFriends',getAllFriends)

route.exports = route