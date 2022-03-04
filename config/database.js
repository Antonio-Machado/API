const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/cursos_online')
module.exports = mongoose.connection