const jwt = require('jsonwebtoken');
const User = require('../model/user');
const crypt = require('bcrypt');
const user = require('../model/user');

module.exports = {
    signUp: (req, res) => {
        console.log(req.body.data)
        User.create({
            name: req.body.data.name,
            email: req.body.data.email,
            password: crypt.hashSync(req.body.data.password,10),
            role: req.body.data.role
        }).then((user) => {
            res.status(201).json({
                message: 'Sign Up Success',
                data: user,
            });
        }).catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
    },
    signIn: (req, res) => {
        User.where("email", req.body.data.email)
        .then((user) => {
            if (user == null) {
                res.status(404).json({
                    message: "User not exists"
                })
            }
            user = user[0]
            const checkLogin = crypt.compareSync(req.body.data.password, user.password)
            if (checkLogin) {
                var token = jwt.sign({ id: user.id, role: user.role, email:user.email }, process.env.JWT_SECRET);
                if (token) {
                    res.status(200).json({
                        message: "Success Sign In",
                        token: token
                    });
                }
            } else {
                res.status(200).json({
                    message: "Failed Sign In",
                });
            }
        }).catch((err) => {
            res.status(500).json({
                message: err.message,
            });
        });
    },

}