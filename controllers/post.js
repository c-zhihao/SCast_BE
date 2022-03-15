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

module.exports = {
  addPost,
}
