let controllers = {};
const modelBklpk = require("../models/Bukalapak.js");
controllers.reqGift = (req, res) => {
  let giftString = req.user;

  modelBklpk.getbykat(giftString, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ hasil: data });
    }
  });
};

module.exports = controllers;
