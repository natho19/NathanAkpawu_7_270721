const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Post = require('../models').Post;

dotenv.config();

exports.createPost = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;

        const post = {
            title: req.body.title,
            content: req.body.content,
            userId: userId
        };
    
        Post.create(post)
            .then(() => res.status(201).json({ message: 'Post créé avec succès !' }))
            .catch(error => res.status(400).json({ message: 'Impossible de créer cette sauce', error }))

    } catch (error) {
        res.status(401).json({ error })
    }
}