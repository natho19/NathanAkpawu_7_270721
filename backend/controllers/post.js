const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Post = require('../models').Post;
const fs = require('fs');

dotenv.config();

exports.createPost = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;

        const post = {
            title: req.body.title,
            content: req.body.content,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            userId: userId
        };
    
        Post.create(post)
            .then(() => res.status(201).json({ message: 'Post créé avec succès !' }))
            .catch(error => res.status(400).json({ message: 'Impossible de créer cette sauce', error }))

    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.getAllPosts = (req, res, next) => {
    Post.findAll({ order: [['updatedAt', 'DESC']] })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
}

exports.modifyPost = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        // Pour que l'utilisateur puisse modifier uniquement ses articles 
        const userId = decodedToken.userId; 

        var updatedPost = {
            title: req.body.title,
            content: req.body.content
        }

        Post.findOne({ where: { id: req.params.id } })
            .then(post => {
                if (req.file) {
                    const filename = post.imageUrl.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        updatedPost.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                        Post.update(updatedPost, { where: { id: req.params.id, userId: userId }})
                            .then(() => res.status(200).json({ message: 'Post modifié !' }))
                            .catch(error => res.status(400).json({ error }));
                    })
                } else {
                    Post.update(updatedPost, { where: { id: req.params.id, userId: userId }})
                        .then(() => res.status(200).json({ message: 'Post modifié !' }))
                        .catch(error => res.status(400).json({ error }));
                }
            })
            .catch(error => res.status(500).json({ error }))
    } catch (error) {
        res.status(401).json({ error })
    }   
}