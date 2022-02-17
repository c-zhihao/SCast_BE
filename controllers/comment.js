const courseModule = require('../models/courseModule');

const addComment = async (req, res) => {
    console.log(req.body);
    const commentDetails = req.body;
    const id = req.params.id;
    courseModule.findById(id, function (err, doc) {
        if (!err) {
            console.log(doc);
            var subDoc = doc.post.id(commentDetails.postId)
            console.log(subDoc);

            var comment = {
                "userId": commentDetails.userId,
                "commentText": commentDetails.commentText
            }
            subDoc.comment.push(comment);

            doc.save().then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
            });
            //res.send(200);
        }
        else {

        }
    });
}

module.exports = {
    addComment
}