const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "../data.json");

let controllers = {};

controllers.giftRecomendation = (req, res, next) => {
  let reqData = JSON.parse(req.body.data);
  let detailData = [];
  let constArr = [];
  reqData = reqData.recomendation;

  reqData = reqData.sort(function compare(a, b) {
    if (Number(a.count) > Number(b.count)) {
      return -1;
    }
    if (Number(a.count) < Number(b.count)) return 1;
    return 0;
  });

  for (let i = 0; i < 3; i++) {
    if (reqData[i] == undefined) {
      break;
    }
    constArr.unshift({
      searchString: reqData[i].data[
        Math.floor(Math.random() * reqData[i].data.length)
      ],
      priority: 1
    });
  }

  reqData.forEach(rec => {
    rec.data.forEach(dat => {
      detailData.push(dat);
    });
  });

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const refData = JSON.parse(data);

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

    let ctr = 0;
    for (let i = 0; i < detailData.length; i++) {
      ctr = 0;
      for (let k = i + 1; k < detailData.length; k++) {
        if (new RegExp(detailData[i]).test(detailData[k])) {
          ctr++;
        }
      }
      if (ctr !== 0) {
        constArr.unshift({ searchString: detailData[i], priority: ctr });
      }
    }

    req.user = constArr;
    return next();
  });
};

module.exports = controllers;
