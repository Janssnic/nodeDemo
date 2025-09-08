const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Node world')
})

app.get('/shop', (req, res) => {
    res.send('Node shoppen')
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
