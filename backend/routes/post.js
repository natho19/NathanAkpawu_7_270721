const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postController.createPost);
router.get('/', auth, postController.getAllPosts);
router.get('/:id', auth, postController.getOnePost);
router.put('/:id', auth, multer, postController.modifyPost);
router.delete('/:id', auth, postController.deletePost);

module.exports = router;