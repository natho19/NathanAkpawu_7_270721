const models = require('../models');

exports.signup = (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    };
    models.User.create(user).then(result => {
        res.status(201).json({
            message: 'Utilisateur crée avec succès !',
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Impossible de créer cet utilisateur',
            post: error
        })
    })
};

exports.login = (req, res) => {
    res.json({ message: 'Pour la connexion' });
};