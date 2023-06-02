const route = require('express').Router()
const {DeleteFriendRequest,cancelFriendRequest,addFriends} = require('../controllers/friends.controller')
const {getSuggestions,getAllFriends,getFriendRequest, getAll} = require('../controllers/friends.controller')

route.delete('/deleteFriendRequest',DeleteFriendRequest)
route.put('/addFriends',addFriends)
route.put('/cancelFriendRequest',cancelFriendRequest)
route.get('/getAllFriends',getAllFriends)
route.get('/getFriendRequest',getFriendRequest)
route.get('/getSuggestions',getSuggestions)
route.get('/getAll',getAll)

module.exports = route