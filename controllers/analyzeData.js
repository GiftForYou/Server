const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "../data.json");

let controllers = {};

controllers.giftRecomendation = (req, res, next) => {
  const reqData = JSON.parse(req.body.data);

  const detailData = reqData.detail[0]; //misal dapet g dapet list yang semua like, kirim temen2nya nanti digabung disini baru di proses
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const refData = JSON.parse(data);
    let constArr = [];

    refData.forEach(ref => {
      ref.kategori.forEach(kat => {
        let bool = false;
        let count = 0;
        detailData.data.forEach(dat => {
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
    return next();
  });
};

module.exports = controllers;
