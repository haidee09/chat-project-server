
var Chat = require('../models/chat.model');

exports.list_all_chats= function(req, res, next) {
  Chat.find({}, function(err, chat) {
    if (err)
      res.status(400).send(err);
    res.json(chat);
  });
};

exports.create_chat = function(req, res, next) {
  console.log("REQ BODY: " + JSON.stringify(req.body));
  var new_chat = new Chat({nickname: req.body.nickname, message: req.body.message});
  console.log(new_chat);
  new_chat.save(function(err, chat) {
    if (err)
      res.status(400).send(err);
    res.json(chat);
  });
};

