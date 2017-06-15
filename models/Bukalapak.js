const axios = require("axios");
const async = require("async");
const util = require("../helper/helper");
let blapak = {};

blapak.getbykat = (stringkat, callback) => {
  stringkat = util.arrangeData(stringkat);
  if (stringkat[0] === undefined) {
    callback(null, []);
  }
  let recProduct = [];
  async.each(
    stringkat,
    function(search, callback) {
      let url;
      if (search.katid !== undefined) {
        url = `https://api.bukalapak.com/v2/products.json?category_id=${search.katid}&page=1&per_page=10?condition=new`;
      } else {
        url = `https://api.bukalapak.com/v2/products.json?keywords=${search.searchString}&page=1&per_page=10?condition=new`;
      }
      axios
        .get(url)
        .then(function(response) {
          product =
            response.data.products[
              Math.floor(Math.random() * response.data.products.length)
            ];
          recProduct.push({
            key: search.katid || search.searchString,
            id: product.id,
            seller_username: product.seller_username,
            seller_level: product.seller_level,
            name: product.name,
            Desc: product.desc,
            Images: product.images,
            Url_lapak: product.url
          });
          callback();
        })
        .catch(function(error) {
          console.log("failed feth to buklapak", error);
          callback();
        });
    },
    function(err) {
      if (err) {
        console.log("something wrong", err);
        callback(err, null);
      } else {
        console.log("All files have been processed successfully");
        callback(null, recProduct);
      }
    }
  );
};

module.exports = blapak;
