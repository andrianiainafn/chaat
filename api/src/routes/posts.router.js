const route = require('express').Router();
const {create,get, reaction, checkReaction
,getUserPost, savePost, unsavePost, getSavedPost, checkSaved} = require('../controllers/posts.controller')
        
route.post('/create', create)
route.get('/getpost/:id',get)
route.put('/reaction/:post',reaction)
route.get('/checkReaction/:post',checkReaction)
route.get('/getUserPost/:userid',getUserPost)
route.put('/save/:post',savePost)
route.put('/unsave/:post',unsavePost)
route.get('/getSavedPost', getSavedPost)
route.get('/checkSaved',checkSaved)

module.exports = route