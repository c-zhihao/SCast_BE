const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
var itemRouter = express.Router({ mergeParams: true });
router.use('/:id', itemRouter);


itemRouter.post('/addpost',postController.addPost);


module.exports = router;