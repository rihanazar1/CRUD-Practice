require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/DB/DB")
connect()

app.listen(process.env.PORT , () => {
    console.log("server is running on " + process.env.PORT)
})