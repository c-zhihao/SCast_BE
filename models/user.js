const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     name:String,
//     username:String,
//     password:String,
//     comment:[Number]
// },{timestamps:true});

const userSchema = new Schema({
    name:String,
    username:String,
    password:String,
    comment:[{
        userId:String,
        commentText:String,
        imageURL:String,
    }]
},{timestamps:true});

const user = mongoose.model('user',userSchema);

module.exports = user;