//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen
require('./connect.js')
const express = require('express')


const app = express()
const PORT = 3000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})