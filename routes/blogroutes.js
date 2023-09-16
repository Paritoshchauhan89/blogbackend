const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogControlller } = require('../controllers/blogcontrollers')

// router object
const router = express.Router()

// routes
// Get || all blogs
router.get('/all-blog', getAllBlogsController)

// POST || create blog
router.post('/create-blog',createBlogController)

// Put || update blog
router.put('/update-blog/:id',updateBlogController)

// Get || Single blog Details
router.get('/get-blog/:id',getBlogByIdController)

// Delete || delete blog
router.delete('/delete-blog/:id',deleteBlogController)

// Get || user blog
router.get('/user-blog/:id',userBlogControlller)
module.exports = router