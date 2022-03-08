require('dotenv').config()
const cors = require('cors')
var express = require('express');
var app = express()
app.use(cors())
app.use(express.json())


const db = require("./config/database")
db.on("connected", () => {
    console.log("database connected")
})

db.on("disconnected", () => {
    console.log("database disconnected")
}) 

db.on("error", (error) => {
    console.log("Ocorreu o erro" + error)
})

require("./config/routes")(app)

app.listen(process.env.PORT || 3000, () => {
    console.log("servidor rodando na porta 3000")
})