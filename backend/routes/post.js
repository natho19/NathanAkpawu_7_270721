const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postController.createPost);

module.exports = router;