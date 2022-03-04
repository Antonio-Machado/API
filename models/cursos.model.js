const mongoose = require('mongoose')
let Schema = mongoose.Schema
let CursosSchema = new Schema({
    nome: String,
    descrição: String, //sei que tem um date que se coloca aqui
    imagem: String,//pt.wikipedia.org/wiki/JavaScript#/media/Ficheiro:Unofficial_JavaScript_logo_2.svg, //não sei o que seria aqui
    autor: String,
    video: String, //não sei se é string aqui também
})
module.exports = mongoose.model("Cursos", CursosSchema)