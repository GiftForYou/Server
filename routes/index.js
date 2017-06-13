var express = require("express");
var router = express.Router();

const controllers = require("../controllers/birthdays");
const cheerio = require("../controllers/scrape");
const analyze = require("../controllers/analyzeData");
const bklpk = require("../controllers/bukaLapak");
/* GET home page. */
router.get("/birthday", controllers.getAll);

router.post("/birthday", controllers.createBirth);
router.delete("/birthday/:id", controllers.deleteBirth);

router.get("/scrape", cheerio);

router.post("/recomendation", analyze.giftRecomendation, bklpk.reqGift);
// router.post("/recomendation", bklpk.reqGift);
// router.get("/recomendation", bklpk.getGift);

// router.post('/recomendation', recomendations.searchs)

module.exports = router;
