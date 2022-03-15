const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moduleSchema = new Schema(
  {
    moduleCode: String,
    moduleName: String,
    post: [
      {
        userId: String,
        name: String,
        postTitle: String,
        postImage: String,
        postObjective: String,
        postType: String,
        comment: [
          {
            userId: String,
            name: String,
            commentText: String,
            commentImage: String,
            createdAt: { type: Date, default: Date.now() },
          },
        ],
      },
    ],
  },
  { timestamps: true }
)

const courseModule = mongoose.model('module', moduleSchema)

module.exports = courseModule
