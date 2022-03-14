const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
var itemRouter = express.Router({ mergeParams: true });
router.use('/:id', itemRouter);

router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.post('/addUser',userController.addUser);
router.post('/login', userController.login);
itemRouter.post('/addBookmark',userController.addBookmark);
itemRouter.post('/deleteBookmark',userController.deleteBookmark);
//router.post('/updateUser',userController.addUser);


module.exports = router;