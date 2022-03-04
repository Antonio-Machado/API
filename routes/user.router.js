const express = require('express')
const router = express.Router()
const userController = require("../controllers/user.controllers")


router.post("/", userController.createUser )

router.get("/", userController.getUsers)

router.get("/:id", userController.getUser)

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser)

/*
router.put("/api/users/:id" , (req, res) => {
    const id = req.params.id
    const newUser = req.body
    users = users.map((item) => {
        if(item.id == id){
            item = newUser
        }
        return item
    })
    res.send("Usuário atualizado com sucesso")
})



router.delete("/api/users/:id", (req, res) => {
    const id = req.params.id
    users = users.filter((item) => {
        if(item.id == id){
            return false
        }else {
            return true
        }
    })
    res.send("Usuário removido com sucesso")
})

//https://github.com/rafaelnilton/teacher-rafael/blob/main/API/controllers/user.controller.js

router.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const userFound = users.filter((item) => {
        if(item.id == id){
            return item
        }
    })
    if(userFound.length > 0){
        res.send(userFound[0])
    } else {
        res.status(404).send("Usuário não encontrado")
    } 
})
*/

module.exports = router;