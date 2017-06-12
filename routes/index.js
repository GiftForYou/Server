var express = require('express');
var router = express.Router();
const controllers = require('../controllers/birthdays');
const recomendations = require('../controllers/recomendation')

/* GET home page. */
router.get('/birthday', controllers.getAll);

router.post('/birthday', controllers.createBirth)
router.delete('/birthday/:id', controllers.deleteBirth)

router.post('/recomendation', recomendations.searchs)

module.exports = router;
