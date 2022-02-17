const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/courseModule');
var itemRouter = express.Router({ mergeParams: true });
router.use('/:id', itemRouter);

router.get('/', moduleController.getAllModule);
router.get('/:id', moduleController.getOneModule);
router.post('/addModule',moduleController.addModule);
itemRouter.post('/updateModule',moduleController.updateModule);

module.exports = router;