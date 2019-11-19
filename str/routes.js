const express = require("express")
const characters = require("./control/characters")

const router = express.Router()

router.get("/persons", characters.getChars)

router.get('/persons/:id', characters.getChar)

router.post('/persons', characters.createChar)

router.patch('/persons/:id', characters.updateChar)

router.delete('/persons/:id', characters.deleteChar)


module.exports = router
