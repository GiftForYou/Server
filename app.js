var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

var index = require("./routes/index");

var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);

module.exports = app;
