const mongoose = require("mongoose");
console.log("~url: ", process.env.DATABASE)
mongoose.connect(process.env.DATABASE)
module.exports = mongoose.connection