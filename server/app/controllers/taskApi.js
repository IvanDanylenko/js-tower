const db = require('../util/db');

exports.taskList = function(req, res){
    db.loadDatabase({}, function () {
        res.status(200).json({data: db.getCollection('tasklevels').data});
    });
};

exports.exercise = function(req, res){
    let query = req.query.taskId;
    if(query) {
        let id = parseInt(query);
        db.loadDatabase({}, function () {
            console.log('task');
            res.status(200).json({data: db.getCollection('exercises').find({taskId: id})});
        });
    } else {
        res.status(500).send({error: 'An error has occured'});
    }
};
