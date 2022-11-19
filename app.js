const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/users", usersRouter);

// home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// not found route
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

// error handle
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something wrong or broken"
    })
})

module.exports = app;