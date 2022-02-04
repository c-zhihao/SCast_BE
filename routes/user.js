const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.getAllUser);
router.get('/addUser',userController.addUser);
router.get('/:id', userController.getUser);



//router.post /:id
//router.delete /:id

module.exports = router;