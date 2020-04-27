var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');
var chatController = require('../controllers/chat.controller');

router.get('/', function(req, res, next) {
    res.send('Bienvenido a la API REST del Chat');
});

//User routes

router.get('/getTotalUsers', userController.list_all_users);
router.post('/user', userController.create_user);
router.delete('/user/:nickname', userController.delete_user);

//Chat routes

router.route('/chat')
    .get(chatController.list_all_chats)
    .post(chatController.create_chat);

module.exports = router;