const express = require('express')
const personajes = require('./controllers/personajes.js')


const router = express.Router()


router.get('/persons', personajes.getPersonajes)
router.get('/persons/:id', personajes.getPersonaje)
router.post('/persons', personajes.createPersonaje)
router.patch('/persons/:id', personajes.updatePersonaje)
router.delete('/persons/:id', personajes.deletePersonaje)


module.exports = router
