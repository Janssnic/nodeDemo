const express = require('express')
//middleware
const fetchProduct = require('./middleware/fetch-product')
const logRequest = require('./middleware/log-request')

const PORT = 3000

const app = express()

app.use(logRequest)

app.get('/', (req, res) => {
    res.send('Node world')
})

app.get('/shop', fetchProduct, (req, res) => {
    res.send('Välkommen till shoppen! ' + `vil säljer ${req.product}`)
})

app.get('/json', (req, res) => {
    res.json({greeting: "hello!"})
})

app.get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name + "!")
})

app.get('/weekday/:day', (req, res) =>{
    
    Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.send(Weekdays[req.params.day])
})

app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})
