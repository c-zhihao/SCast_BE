const courseModule = require('../models/courseModule')

const addPost = async (req, res) => {
  console.log(req.body)
  const postDetails = req.body
  const id = req.params.id
  courseModule.findById(id, function (err, doc) {
    if (!err) {
      console.log(doc)

      var post = {
        userId: postDetails.userId,
        name: postDetails.name,
        postTitle: postDetails.postTitle,
        postImage: postDetails.postImage,
        postObjective: postDetails.postObjective,
        postType: postDetails.postType,
        comment: [],
      }
      doc.post.push(post)

      doc
        .save()
        .then((result) => {
          res.sendStatus(200)
        })
        .catch((err) => {
          console.log(err)
          res.sendStatus(400)
        })
    } else {
    }
  })
}

const deletePost = async (req, res) => {
  console.log(req.body)
  const postDetails = req.body
  const id = req.params.id
  const postId = postDetails.postId;
  courseModule.findById(id, function (err, doc) {
    if (!err) {
      for (let i = 0; i < doc.post.length; i++) {
        console.log(doc.post[i]._id.toString());
        console.log(postId);
        if (doc.post[i]._id.toString() == postId) {
          doc.post[i].remove();
          break;
        }
      }
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
  addPost,
  deletePost
}
