const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

const tempData = [
    { text: "moin" },
    { text: "hello" },
    { text: "bonjour" },
    { text: "hola" },
    { text: "hallo" }
]
router.get('/', async (req, res) => {
    try {
        const notes = await prisma.note.findMany(
            // { where: {author_id: 1} }
        )
        res.json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Error" })
    }
})

router.post('/', async (req, res) => {
    try {
        const newNote = await prisma.note.create({
            data: {
                author_id: 1,
                note: req.body.text
        }
    })

res.json({ msg: "new note created!", newNote: newNote })

    } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Error" })
}


})

router.patch('/:id', (req, res) => {
    tempData[req.params.id] = req.body
    res.send({ text: req.body.text, id: req.params.id })
})
router.delete('/:id', (req, res) => {
    tempData.splice(req.params.id)
    res.send({ id: req.params.id })
})

module.exports = router