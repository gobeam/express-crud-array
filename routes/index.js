const express = require('express');
const router = express.Router();
const userController = require("../controller/user.controller");

router.get('/user', userController.get);
router.post('/user', userController.store);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.destroy);

module.exports = router;