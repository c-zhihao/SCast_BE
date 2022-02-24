const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    moduleCode:String,
    moduleName:String,
    post:[{
        userId:String,
        postTitle:String,
        postImage:String,
        postType:String,
        comment:[{
            userId:String,
            commentText:String,
            imageURL:String,
        }]
    }]
},{timestamps:true});

const courseModule = mongoose.model('module',moduleSchema);

module.exports = courseModule;