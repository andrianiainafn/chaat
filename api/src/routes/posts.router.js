const route = require('express').Router();
const {create,get, reaction, checkReaction
,getUserPost, savePost, unsavePost, getSavedPost, checkSaved, deletePosts} = require('../controllers/posts.controller');
const authMiddleware = require('../middelwares/auth.middelware');
        
route.post('/create',authMiddleware, create)
route.get('/getpost/:id',get)
route.put('/reaction/:post',authMiddleware,reaction)
route.get('/checkReaction/:post',checkReaction)
route.get('/getUserPost/:userid',getUserPost)
route.put('/save/:post',authMiddleware,savePost)
route.put('/unsave/:post',authMiddleware,unsavePost)
route.get('/getSavedPost',authMiddleware, getSavedPost)
route.get('/checkSaved',authMiddleware,checkSaved)
route.delete('/delete', authMiddleware,deletePosts)

module.exports = route