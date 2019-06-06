const db = require('../util/db');

exports.ex1TaskList = function(req, res){
  db.loadDatabase({}, function () {
      res.status(200).json({data: db.getCollection('ex1').data});
  });
};

exports.ex2TaskList = function (req, res) {
  db.loadDatabase({}, function () {
    res.status(200).json({ data: db.getCollection('ex2').data });
  });
};

exports.ex3TaskList = function (req, res) {
  db.loadDatabase({}, function () {
    res.status(200).json({ data: db.getCollection('ex3').data });
  });
};

exports.exercise = function(req, res){
    let query = req.query.taskId;
    if(query) {
        let id = parseInt(query);
        db.loadDatabase({}, function () {
            res.status(200).json({data: db.getCollection('exercises').find({taskId: id})});
        });
    } else {
        res.status(500).send({error: 'An error has occured'});
    }
};
