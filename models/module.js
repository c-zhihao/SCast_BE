const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    moduleCode:String,
    moduleName:String,
    post:[{
        userid:String,
        postTitle:String,
        postImage:String,
        comment:[{
            userId:String,
            commentText:String,
            imageURL:String,
        }]
    }]
    
},{timestamps:true});

const user = mongoose.model('user',userSchema);

module.exports = user;