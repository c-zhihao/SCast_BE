const courseModule = require('../models/courseModule');

const addPost = async (req, res) => {
    console.log(req.body);
    const postDetails = req.body;
    const id = req.params.id;
    courseModule.findById(id, function (err, doc) {
        if (!err) {
            console.log(doc);

            var post = {
                "userId": postDetails.userId,
                "postTitle": postDetails.postTitle,
                "postImage": postDetails.postImage,
                "postType": postDetails.postType,
                "comment": []
            }
            doc.post.push(post);

            doc.save().then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
            });
        }
        else {

        }
    });
}

module.exports = {
    addPost
}