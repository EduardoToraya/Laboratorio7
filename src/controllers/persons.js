const Person = require('../models/person.js')

const createPerson = function(req,res){
    const person = new Person(req.body)

    person.save().then(function(){
        return res.send(person)
    }).catch(function(error){
        return res.status(400).send({error})
    })
}

const getPersons = function (req, res) {
  Person.find({}).then(function (persons) {
    return res.send(persons)
  }).catch(function (error) {
    return res.status(500).send(error)
  })
}

const getPerson = function (req, res) {
  _id = req.params.id
  Person.findById(_id).then(function (person) {
    if(!person){
      return res.send({error : "Person not found"})
    }
    return res.send(person)
  }).catch(function (error) {
    return res.status(404).send({})
  })
}

const updatePerson = function (req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'father', 'mother']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Person.findByIdAndUpdate(_id, req.body).then(function (person) {
    if (!person) {
      return res.status(404).send({})
    }
    return res.send(person)
  }).catch(function (error) {
    return res.status(500).send(error)
  })
}

const deletePerson = function (req, res) {
  const _id = req.params.id
  Person.findByIdAndDelete(_id).then(function (person) {
    if (!person) {
      return res.status(404).send({})
    }
    return res.send(person)
  }).catch(function (error) {
    res.status(505).send({error})
  })
}

module.exports = {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
}
