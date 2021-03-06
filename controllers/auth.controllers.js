const express = require ('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

const User = require('../models/user.model')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { email } = req.body  // porque ele coloca essas chaves??

    try {

        if(await User.findOne({ email }))  //não precisa mais de chaves no if?
        return res.status(400).send({ error: "User already exists"})

        const user = User.create(req.body)

        user.password = undefined

        return res.send( { user } )  //porque precisa de chaves no user?
    } catch (error) {
        return res.status(400).send( {error: "Deu ruim"} ) //aqui tbm precisa
    }
})

router.post('authenticate', async (req, res) => {
    const { email, password} = req.body

    const user = await User.findOne( {email} ).select('+password')

    if (!user)
    return res.status(400).send({ error: 'User not found' }) 

    if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid Password' })

    user.password = undefined

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400
    })

    res.send({ user, token })
})

module.exports = app => app.use('/auth', router)
