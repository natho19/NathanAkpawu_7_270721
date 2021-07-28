const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');
const auth = require('../middleware/auth');

router.post('/', auth, postController.createPost);

module.exports = router;