const Personaje = require('../models/personaje.js')

const createPersonaje = function (req, res) {
  const personaje = new Personaje(req.body)
  personaje.save().then(function () {
    return res.send(personaje)
  }).catch(function (error) {
    return res.status(400).send(error)
  })
}

const getPersonajes = function (req, res) {
  Personaje.find({}).then(function (personajes) {
    return res.send(personajes)
  }).catch(function (error) {
    return res.status(500).send(error)
  })
}

const getPersonaje = function (req, res) {
  _id = req.params.id
  Personaje.findById(_id).then(function (personaje) {
    return res.send(personaje)
  }).catch(function (error) {
    return res.status(404).send({})
  })
}

const updatePersonaje = function (req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'father', 'mother']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Personaje.findByIdAndUpdate(_id, req.body).then(function (personaje) {
    if (!user) {
      return res.status(404).send({})
    }
    return res.send(user)
  }).catch(function (error) {
    return res.status(500).send(error)
  })
}

const deletePersonaje = function (req, res) {
  const _id = req.params.id
  Personaje.findByIdAndDelete(_id).then(function (personaje) {
    if (!personaje) {
      return res.status(404).send({})
    }
    return res.send(personaje)
  }).catch(function (error) {
    res.status(505).send(error)
  })
}

module.exports = {
  getPersonajes,
  getPersonaje,
  createPersonaje,
  updatePersonaje,
  deletePersonaje
}
