const express = require('express')
const userRouter = require("../routes/user.router")
const courseRouter = require("../routes/cursos.router")

module.exports = (app) => {
    app.use("/api/users", userRouter)
    app.use("/api/cursos", courseRouter)
    app.use("/", (request, response) => {
        console.log("Bem vindo a minha API")
        response.send("Bem vindo a minha API")
    })
}

