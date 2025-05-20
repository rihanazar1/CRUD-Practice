const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        console.log("Database Connected Successfully")
    })
    .catch((err) => {
        console.log("connection denied")
    })
}

module.exports = connect