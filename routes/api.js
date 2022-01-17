const express = require('express');
const router = express.Router();

const userEndPoint = require('./user/user'); // user.js import
const brandEndpoint = require('./brand/brand'); 

router.use('/user',userEndPoint); // localhost:3000/api/user
router.use('/brand',brandEndpoint)

module.exports = router;