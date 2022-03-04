require('dotenv').config()
var express = require('express');
const User = require("./models/user.model")
const Cursos = require("./models/cursos.model")
var app = express()
app.use(express.json())
const userController = require("./controllers/user.controllers")
const cursosController = require("./controllers/cursos.controllers")
const authController = require("./controllers/auth.controllers")(app)
//

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

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})