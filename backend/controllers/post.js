const dotenv = require('dotenv');
const Post = require('../models').Post;
const User = require('../models').User;
const fs = require('fs');

dotenv.config();

exports.createPost = (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
        userId: req.body.userId
    };
    
    Post.create(post)
        .then(() => res.status(201).json({ message: 'Post créé !' }))
        .catch(error => res.status(400).json({ message: 'Impossible de créer ce post', error }));
}

exports.getAllPosts = (req, res) => {
    Post.findAll({ order: [['updatedAt', 'DESC']], include: { model: User } })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ message: 'Impossible d\'afficher tous les posts', error }));
}

exports.getOnePost = (req, res) => {
    const id = req.params.id;
    Post.findOne({ where: { id: id } })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({ message: 'Impossible d\'afficher le post', error }));
}

exports.modifyPost = (req, res) => {
    const id = req.params.id;
    const userId = req.body.userId

    var updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
    }

    Post.update(updatedPost, { where: { id: id, userId: userId }})
        .then(() => res.status(200).json({ message: 'Post modifié !' }))
        .catch(error => res.status(400).json({ message: 'Impossible de modifier ce post', error }));
}

exports.deletePost = (req, res) => {

    const id = req.params.id;
    const userId = req.body.userId;

    Post.findOne({ where: { id: id } })
        .then(post => {
            if (post.imageUrl) {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({ where: { id: id, userId: userId }})
                        .then(() => res.status(200).json({ message: 'Post supprimé !' }))
                        .catch(error => res.status(400).json({ message: 'Impossible de supprimer le post', error }));
                })
            } else {
                Post.destroy({ where: { id: id, userId: userId }})
                    .then(() => res.status(200).json({ message: 'Post supprimé !' }))
                    .catch(error => res.status(400).json({ message: 'Impossible de supprimer le post', error }));
            }
        })
        .catch(error => res.status(500).json({ error }))
}