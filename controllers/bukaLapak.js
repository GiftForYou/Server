let controllers = {};
const modelBklpk = require("../models/Bukalapak.js");
controllers.reqGift = (req, res) => {

  let giftString = req.user;
  console.log(giftString);
  modelBklpk.getbykat(giftString, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.send({hasil: data});
    }
  });
};

controllers.getGift = (req, res)=>{
  res.send({"hoi": "hello"})
}

module.exports = controllers;
