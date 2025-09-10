const express = require('express')
const router = express.Router()

const tempData = [
    { text: "moin" },
    { text: "hello" },
    { text: "bonjour" },
    { text: "hola" },
    { text: "hallo" }
]
router.get('/', (req, res) => {
    res.send(tempData)
})

router.post('/', (req, res) => {
    res.send({ 
        Method: "POST",
        text: req.body.text 
    })
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