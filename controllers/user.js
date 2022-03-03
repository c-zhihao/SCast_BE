//require the model if using mongoose
const user = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const formatError = (code, message, desc) => {
    var obj = {
        "code": code,
        "message": message,
        "description": desc
    }
    return obj;
    //if want string jsonstringy here
}

const getAllUser = async (req, res) => {
    console.log("get all user");
    await user.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
}

const getOneUser = async (req, res) => {
    console.log("get one user");
    console.log(req.params);
    const id = req.params.id;
    await user.findById(id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
    //res.send(200);
}


const addUser = async (req, res) => {
    console.log("Creating new user...");
    console.log(req.body);
    const userDetails = req.body;
    const image = userDetails.image ? req.body.image : 'null'
    console.log("image link: " + image);
    const User = new user({
        name: userDetails.name,
        username: userDetails.username,
        password: userDetails.password,
        role: "student",
        imageURL: image
    })

    User.save()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log(err);
        })

}

const login = async (req, res) => {
    console.log('logging in user...');
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({ 'username': username }, function (err, user) {
        //console.log(user);
        if (user) {
            const jwtUser = { username: username }
            if (user.password == password) {
                const jwtToken = jwt.sign(jwtUser,process.env.ACCESS_TOKEN_SECRET);
                let result = {
                    "token":jwtToken,
                    user
                }
                res.send(result);
            } else {
                res.status(401).send(formatError(401, "Wrong password", "User keyed in the wrong password"));
            }
        } else {
            res.status(401).send(formatError(401, "User not found in db", user));
        }
    });
}

module.exports = {
    getOneUser,
    getAllUser,
    addUser,
    login
}