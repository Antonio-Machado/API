const User = require("../models/user.model")

exports.createUser = async (req,res) => {
    try {
        let user = req.body
        const newUser = await User.create(user)
        res.send(newUser)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.getUsers = async (req, res) => {
    try{
        const filters = req.query
        const users = await User.find({}).populate([
            {
                path: "courses", 
                model: "Cursos"
            }
        ])
        res.send(users)
    }   catch (error) {
        res.status(400).send(error.message)
    }
}

exports.getUser = async (req, res) => {
    try{
        const id = req.params.id
        const user = await User.findById(id).populate([
            {
                path: "courses", 
                model: "Cursos"
            }
        ])
        if(user){
            res.send({data: user, message: "user founded"})
        } else {
            res.status(404).send("User not found")
        }
    } catch (error){
        res.status(400).send(error.message)
    }
}

exports.updateUser = async (req, res) => {
    try{
        const userId = req.params.id
        const userData = req.body
        const updateUser = await User.findByIdAndUpdate( userId, { $set: userData }, {new: true })
        if (updateUser){
            res.send({ data: updateUser, message: "User updated successfully"})
        }else {
            res.status(400).send("An error has occurred")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const userId = req.params.id
        const deletedUser = await User.deleteOne({ _id: userId })

        if(deletedUser.deletedCount > 0){
            res.status(200).send({ message: "User deleted"})
        } else {
            res.status(404).send("User not found")
        } 
    } catch (error){
        res.status(400).send(error.message)
    }
}