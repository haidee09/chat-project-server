
var User = require('../models/user.model');

exports.list_all_users = function(req, res, next) {
    User.count({'online':true}, function(err, users) {
        if (err)
            res.status(400).send(err);
        console.log(users);
        res.json({ total : users });
    });
};

exports.create_user = function(req, res, next) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.status(400).send(err);
        res.json(user);
    });   
};

exports.delete_user = function(req, res, next) {
    User.remove({'nickname': req.params.nickname}, function(err, user) {
      if (err)
        res.status(400).send(err);
      res.json({ message: 'Nickname de usuario eliminado'});
    });
};