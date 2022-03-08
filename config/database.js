const mongoose = require("mongoose");
console.log("~url: ", process.env.DATABASE)
mongoose.connect(process.env.DATABASE ? process.env.DATABASE : "mongodb://localhost:27017/cursos_online")
module.exports = mongoose.connection