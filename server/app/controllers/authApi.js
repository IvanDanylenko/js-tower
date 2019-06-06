const db = require('../util/db');
const jwtoken = require('jsonwebtoken');
const jwtSecret = 'FACE7CDC-7643-4AC1-861D-42ED99CCCC32';

exports.userList = function(req, res){
    db.loadDatabase({}, function () {
        res.status(200).json({data: db.getCollection('users').data});
    });
};

exports.login = function(req, res) {
    if(!req.body) return res.sendStatus(400);
    const query = {login: req.body.username, password: req.body.password};
    db.loadDatabase({}, function () {
        const data = db.getCollection('users');
        const result = data.findOne({'login': query.login, 'password': query.password});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            const token = jwtoken.sign(result.login, jwtSecret);
          res.status(200).json({ data: { id: result.id, login: result.login, token: token, progress: result.progress }});
        }
    });
};

exports.logout = function(req, res){
    if(!req.body) return res.sendStatus(400);
    const query = {token: req.body.token, score: req.body.score};
    db.loadDatabase({}, function () {
        const data = db.getCollection('users');
        const result = data.findOne({'token': query.token});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            result.update((user) => {user.score = query.score});
            res.status(200).json({data: result});
        }
    });
};

exports.register = function(req, res){
    if(!req.body) return res.sendStatus(400);
    const query = { login: req.body.username, password: req.body.password, token: req.body.password + '-jwt-token', score: 0 };
    db.loadDatabase({}, function () {
        const data = db.getCollection('users');
        data.insert(query);
        db.saveDatabase();
        const result = data.findOne({'login': query.login, 'password': query.password});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            res.status(200).json({data: result});
        }
    });
};

exports.saveScore = function(req, res){
    if(!req.body) return res.sendStatus(400);
    const query = {token: req.body.token, score: req.body.score};
    db.loadDatabase({}, function () {
        const data = db.getCollection('users');
        const result = data.findOne({'token': query.token});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            result.update((user) => {user.score = query.score});
            res.status(200).json({data: result});
        }
    });
};
