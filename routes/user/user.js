const express = require('express');
let router = express.Router();
let userController = require('../../controllers/user')

router.post('/',userController.register)

module.exports = router;
