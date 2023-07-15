const route = require('express').Router()
const {DeleteFriendRequest,cancelFriendRequest,addFriends,AcceptFriendrequest} = require('../controllers/friends.controller')
const {getSuggestions,getAllFriends,getFriendRequest, getAll,checkFriendRequest} = require('../controllers/friends.controller')
const authMiddleware = require('../middelwares/auth.middelware')

route.put('/deleteFriendRequest/:request',authMiddleware,DeleteFriendRequest)
route.put('/addFriends/:request',authMiddleware,addFriends)
route.put('/cancelFriendRequest/:request',authMiddleware,cancelFriendRequest)
route.get('/getAllFriends',authMiddleware,getAllFriends)
route.get('/getFriendRequest',authMiddleware,getFriendRequest)
route.get('/getSuggestions',authMiddleware,getSuggestions)
route.get('/getAll',authMiddleware,getAll)
route.get('/checkFriendRequest/:request',authMiddleware,checkFriendRequest)
route.put('/AcceptFriendrequest/:request',authMiddleware,AcceptFriendrequest)

module.exports = route