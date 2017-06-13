const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "../data.json");

let controllers = {};

controllers.giftRecomendation = (req, res, next) => {
  const reqData = JSON.parse(req.body.data);
  let detailData = [];
  reqData.detail.forEach(detail => {
    detail.data.forEach(data => {
      detailData.push(data);
    });
  });

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const refData = JSON.parse(data);
    let constArr = [];

    refData.forEach(ref => {
      ref.kategori.forEach(kat => {
        let bool = false;
        let count = 0;
        detailData.forEach(dat => {
          if (new RegExp(kat).test(dat)) {
            bool = true;
            count++;
          }
        });

        if (bool === true) {
          if (count > 1) {
            constArr.unshift({ searchString: kat, priority: count });
          } else {
            constArr.push({ katid: ref.id, priority: 0 });
          }
        }
      });
    });

    req.user = constArr;
    console.log(constArr);
    return next();
  });
};

module.exports = controllers;
