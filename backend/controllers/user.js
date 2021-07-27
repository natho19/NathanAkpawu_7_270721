const bcrypt = require('bcrypt');
const maskdata = require('maskdata');

const User = require('../models').User;

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                name: req.body.name,
                email: maskdata.maskEmail2(req.body.email),
                password: hash
            };
            User.create(user)
                .then(() => res.status(201).json({ message: 'Utilisateur créé avec succès !' }))
                .catch(error => res.status(400).json({ message: 'Impossible de créer cet utilisateur', error }));
        })
        .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res) => {
    res.json({ message: 'Pour la connexion' });
};