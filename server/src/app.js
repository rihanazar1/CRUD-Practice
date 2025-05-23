const express = require("express")
const app = express()
const userRoutes = require("./routes/user.routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/user", userRoutes)

module.exports = app