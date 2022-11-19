const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

exports.getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully get all user",
        users
    })
}

exports.createUser = (req, res) => {
    const user = req.body;
    user.id = uuidv4();

    users.push(user)

    res.status(200).json({
        success: true,
        message: "Successfully create the user",
        users
    })
}


exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Couldn't found user"
        })
    }

    user.name = name;
    user.email = email;

    res.status(200).json({
        success: true,
        message: "Successfully update the user",
        users
    })
}


exports.deleteUser = (req, res) => {
    const { id } = req.params;

    const filteredUser = users.filter(user => user.id !== id);


    res.status(200).json({
        success: true,
        message: "Successfully delete the user",
        users: filteredUser
    })
}