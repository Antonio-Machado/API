const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//quando ele da um send no insomnia no register retorna um usuario, o meu retorna um objeto vazio

let Schema = mongoose.Schema
let UserSchema = new Schema({
    name: String,
    email: String,
    password: {
        type: String,
        required: true,
        select: false
    },
    admin: Boolean,
    userType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cursos"
    },
]
})

/*
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})*/


const User = mongoose.model("User", UserSchema)

module.exports = User