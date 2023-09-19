const Registration = require("../models/registration");


const register = (req, res) => {
    Registration.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then((data) => {
        res.send("User Registered successfully.");
    }).catch((err) => {
        res.send(err);
    });
}

module.exports = { register };