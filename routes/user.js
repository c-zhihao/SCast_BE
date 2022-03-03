const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
//implement item rounter if wanna update user e.g. /user/123/updateUser

router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.post('/addUser',userController.addUser);
router.post('/login', userController.login);
//router.post('/updateUser',userController.addUser);


module.exports = router;