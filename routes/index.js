var express = require('express');
var router = express.Router();
const controllers = require('../controllers/birthdays');

/* GET home page. */
router.get('/birthday', controllers.getAll);

router.post('/birthday', controllers.createBirth)
router.delete('/birthday/:id', controllers.deleteBirth)

module.exports = router;
