const route = require('express').Router()
const {DeleteFriendRequest,cancelFriendRequest,addFriends,AcceptFriendrequest} = require('../controllers/friends.controller')
const {getSuggestions,getAllFriends,getFriendRequest, getAll,checkFriendRequest} = require('../controllers/friends.controller')

route.put('/deleteFriendRequest/:request',DeleteFriendRequest)
route.put('/addFriends/:request',addFriends)
route.put('/cancelFriendRequest/:request',cancelFriendRequest)
route.get('/getAllFriends',getAllFriends)
route.get('/getFriendRequest',getFriendRequest)
route.get('/getSuggestions',getSuggestions)
route.get('/getAll',getAll)
route.get('/checkFriendRequest/:request',checkFriendRequest)
route.put('/AcceptFriendrequest/:request',AcceptFriendrequest)

module.exports = route