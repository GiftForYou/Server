var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const cors = require("cors");
const passwordHash = require("password-hash");

//connection to mongodb
const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/gift');

const db_config = {
  development: "mongodb://localhost/gift",
  test: "mongodb://localhost/gift-test"
};

var index = require("./routes/index");

var app = express();
const app_env = app.settings.env;
mongoose.connect(db_config[app_env], (err, res) => {
  console.log(`Connected to Database ${db_config[app_env]}`);
});

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

module.exports = app;
