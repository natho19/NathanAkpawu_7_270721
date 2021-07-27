const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');
const auth = require('../middleware/auth');

router.get('/', auth, postController.test);

module.exports = router;