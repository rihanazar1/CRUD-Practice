const userModel = require("../model/user.model")

module.exports.createController = async (req, res) => {
    try {
        const {name, email, image, age, bio} = req.body
        // console.log(req.body)

        const createUser = await userModel.create({
            name: name,
            email: email,
            image: image,
            age: age,
            bio: bio      
        })
        // console.log(createUser)

        res.send({createUser})

    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.showUserController = async (req, res) => {
    try {
        const showUser = await userModel.find()

        res.send({showUser}) 
        
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}



module.exports.deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}