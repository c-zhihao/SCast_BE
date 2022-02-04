//require the model if using mongoose
const user = require('../models/user');

const getUser = async (req, res) => {
    console.log("get one user");
    //console.log(req);
    //const id = req.params.id;
    const id = '61f9563b0068fdd21f4f1182';
    await user.findById(id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
    //res.send(200);
}

const getAllUser = async (req, res) => {
    console.log("get all user");
    res.send(200);
}

const addUser = async (req, res) => {
    console.log("add one user");
    const User = new user({
        name: 'zh',
        username: '123',
        password: 'qwe',
        comment:[{
            userId:'123',
            commentText:'abc',
            imageURL:'abc'
        },
        {
            userId:'123',
            commentText:'abc',
            imageURL:'abc'
        }]

    })


    User.save()
        .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
    
}

module.exports = {
    getUser,
    getAllUser,
    addUser
}