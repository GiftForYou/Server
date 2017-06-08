var express = require('express');
var router = express.Router();
const controllers = require('../controllers/users');

router.get('/signin', controllers.signIn); //sign in

module.exports = router;
