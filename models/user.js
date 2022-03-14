const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:String,
    username:String,
    password:String,
    role:String,
    phoneNo:String,
    telegramId:String,
    imageURL:String,
    bookmark:[String]
},{timestamps:true});

const user = mongoose.model('user',userSchema);

module.exports = user;