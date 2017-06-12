const axios = require("axios");
const util = require("../helper/helper");
let blapak = {};

blapak.getbykat = (stringkat, callback) => {
  stringkat = util.arrangeData(stringkat);

  let recProduct = [];
  var onComplete = function() {
    callback(null, recProduct);
  };

  var tasksToGo = stringkat.length;

  if (tasksToGo === 0) {
    onComplete();
  } else {
    stringkat.forEach(function(search) {
      if (search.katid !== undefined) {
        const url = `https://api.bukalapak.com/v2/products.json?category_id=${search.katid}&page=1&per_page=10`;
        axios
          .get(url)
          .then(function(response) {
            product =
              response.data.products[
                Math.floor(Math.random() * response.data.products.length + 1)
              ];
            recProduct.push({
              id: product.id,
              seller_username: product.seller_username,
              seller_level: product.seller_level,
              name: product.name,
              Desc: product.desc,
              Images: product.images,
              Url_lapak: product.url
            });
            if (--tasksToGo === 0) {
              onComplete();
            }
          })
          .catch(function(error) {
            callback(error, null);
          });
      } else {
        const url = `https://api.bukalapak.com/v2/products.json?keywords=${search.searchString}&page=1&per_page=10`;
        axios
          .get(url)
          .then(function(response) {
            product =
              response.data.products[
                Math.floor(Math.random() * response.data.products.length + 1)
              ];
            recProduct.unshift({
              id: product.id,
              seller_username: product.seller_username,
              seller_level: product.seller_level,
              name: product.name,
              Desc: product.desc,
              Images: product.images,
              Url_lapak: product.url
            });
            if (--tasksToGo === 0) {
              onComplete();
            }
          })
          .catch(function(error) {
            callback(error, null);
          });
      }
    });
  }
};

module.exports = blapak;
