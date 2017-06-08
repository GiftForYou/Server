const mongoose = require('mongoose');
var Schema = mongoose.Schema

const bodSchema = new Schema({
  name: String,
  birth: String,
  created_at : Date
})

let Birth = mongoose.model('Birth', bodSchema)

module.exports = Birth;