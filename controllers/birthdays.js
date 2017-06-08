const ObjectId = require('mongoose').Types.ObjectId;
const Birth = require('../models/birthdays')

let controllers = {}

controllers.getAll = (req, res, next)=>{
  Birth.find({}, (err, births)=>{
    if(err) res.send(err)
    res.send(births)
  })
}

controllers.createBirth = (req,res,next)=>{
  var bod = Birth({
    name: req.body.name,
    birth: req.body.birthday,
    created_at : new Date()
  })

  bod.save((err, result)=>{
    if(err) res.send(err);

    res.send(result)
  })
}

controllers.deleteBirth = (req,res,next)=>{
  Birth.findByIdAndRemove(req.params.id, (err, data)=>{
    if(err) res.send(err)
    res.send(data)
  })
}


module.exports = controllers