const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');
var itemRouter = express.Router({ mergeParams: true });
router.use('/:id', itemRouter);


itemRouter.post('/addComment',commentController.addComment);


module.exports = router;