const express = require("express")
const userRoutes = express.Router()
const userController = require("../controller/user.controller")

userRoutes.post("/create", userController.createController)

userRoutes.get("/showusers", userController.showUserController)

userRoutes.delete("/delete/:id", userController.deleteUserController)

// userRoutes.("/update/:id", userController.deleteUserController)

module.exports = userRoutes 