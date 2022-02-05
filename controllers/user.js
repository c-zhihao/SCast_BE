//require the model if using mongoose
const user = require('../models/user');

const getAllUser = async (req, res) => {
    console.log("get all user");
    await user.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
}

const getOneUser = async (req, res) => {
    console.log("get one user");
    console.log(req.params);
    const id = req.params.id;
    await user.findById(id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
    //res.send(200);
}


const addUser = async (req, res) => {
    console.log("Creating new user...");
    console.log(req.body);
    const userDetails = req.body;
    const image = userDetails.image ? req.body.image:'null'
    console.log("image link: "+image);
    const User = new user({
        name: userDetails.name, 
        username: userDetails.username,
        password: userDetails.password,
        role: "student",
        imageURL: image
    })

    User.save()
        .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
    
}

module.exports = {
    getOneUser,
    getAllUser,
    addUser
}