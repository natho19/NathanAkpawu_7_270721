const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

const auth = require('../middleware/auth');

// Routes pour les utilisateurs
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/:id', auth, userController.getOneUser);
router.put('/user/:id', auth, userController.modifyUser);
router.delete('/user/:id', auth, userController.deleteUser);

module.exports = router;