const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        name: "Binu",
        email: "binu@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Arif",
        email: "arif@gmail.com"
    }
]


module.exports = users;