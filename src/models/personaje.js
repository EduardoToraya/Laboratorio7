const validator = require('validator')
const mongoose = require('mongoose')

const personajeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      if (parseInt(value) != value) {
        throw new Error('La edad debe ser un entero.')
      }
    }
  },
  born: {
    type: Number,
    validate(value) {
      if (parseInt(value) != value) {
        throw new Error('El año debe ser un entero.')
      }
    }
  },
  timeline: {
    type: String
  },
  alliegance: [{
    type: String
  }],
  playedBy: {
    type: String
  },
  titles: [{
    type: String
  }],
  father: {
    type: String
  },
  mother: {
    type: String
  },
  spouse: {
    type: String
  }
})


const Personaje = mongoose.model('Personaje', personajeSchema)


module.exports = Personaje
