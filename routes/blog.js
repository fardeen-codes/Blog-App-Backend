const express = require('express')
const router = express.Router()

// Import controller
const { dummyLink, likePost, unLikePost} = require("../controllers/likeController")
const { createComment } = require("../controllers/commentController")
const { createPost, getAllPosts } = require('../controllers/postController')




// Mapping create
router.get('/dummyroute', dummyLink)
router.post('/comments/create', createComment)
router.post('/posts/create', createPost)
router.get('/posts', getAllPosts)
router.post('/likes/like', likePost)
router.post('/likes/unlike', unLikePost)

// exports
module.exports = router;
