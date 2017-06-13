var express = require("express");
var router = express.Router();
const analyze = require("../controllers/analyzeData");
const bklpk = require("../controllers/bukaLapak");
/* GET home page. */
router.post("/recomendation", analyze.giftRecomendation, bklpk.reqGift);

// router.post('/recomendation', recomendations.searchs)

module.exports = router;
