const db = require('../util/db');

exports.userList = function(req, res){
    db.loadDatabase({}, function () {
        res.status(200).json({data: db.getCollection('users').data});
    });
};

exports.login = function(req, res) {
    const user = {login: req.body.username, password: req.body.password};
    db.loadDatabase({}, function () {
        const users = db.getCollection('users');
        const result = users.findOne({'login': user.login,'password': user.password});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            res.status(200).json({data: result});
        }
    });
};

exports.registration = function(req, res){
    const user = {login: req.body.username, password: req.body.password, token: req.body.password + '-jwt-token' };
    console.log(user);
    db.loadDatabase({}, function () {
        const users = db.getCollection('users');
        users.insert(user);
        db.saveDatabase();
        const result = users.findOne({'login': user.login,'password': user.password});
        if (result === null) {
            res.status(500).send({error: 'An error has occured'});
        } else {
            res.status(200).json({data: result});
        }
    });
};
