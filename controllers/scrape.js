var request = require("request");
var fs = require("fs");

const scraping = (req, res) => {
  console.log("OEEEE");
  url =
    "https://www.facebook.com/rini.adiarti/about?lst=757373935%3A608113689%3A1497011743";

  request(url, function(error, response, html) {
    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send(html);
  })
};

module.exports = scraping;
