const express = require("express")
const userRoutes = express.Router()
const userController = require("../controller/user.controller")

userRoutes.post("/create", userController.createController)

userRoutes.get("/showusers", userController.showUserController)

userRoutes.delete("/delete/:id", userController.deleteUserController)

userRoutes.put("/update/:id", userController.updateUserController)

module.exports = userRoutes 