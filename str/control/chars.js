const Character = require("../models/char.js")

const createChar = function(req, res){
  const char = new Character(req.body)
  char.save().then(function(){
    return res.send(char)
  }).catch(function(error){
    return res.status(400).send(error)
  })
}

const getChars = function(req,res){
  Character.find({}).then(function(characters){
    return res.send(characters)
  }).catch(function(error){
    return res.status(500).send(error)
  })
}

const getChar = function(req,res){
  _id = req.params.id
  Character.findById(_id).then(function(char){
    return res.send(char)
  }).catch(function(error){
    return res.status(404).send({})
  })
}

const updateChar = function(req, res){
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ["name", "father", "mother"]
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidUpdate){
    return res.status(400).send({
      error: "Update invalid, can only update" + allowedUpdates
    })
  }

  Character.findByIdAndUpdate(_id, req.body).then(function(char){
    if(!user){
      return res.status(404).send({})
    }
    return res.send(user)
  }).catch(function(error){
    return res.status(500).send(error)
  })
}


const deleteChar = function(req, res){
  const _id = req.params.id
  Character.findByIdAndDelete(_id).then(function(char){
    if(!char){
      return res.status(404).send({})
    }
    return res.send(char)
  }).catch(function(error){
    res.status(505).send(error)
  })
}


module.exports = {
  getChar,
  getChars,
  createChar,
  updateChar,
  deleteChar
}
