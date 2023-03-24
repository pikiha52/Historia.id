'use strict'
const express = require('express')
const router = express.Router();
const { listUsers } = require('../controllers/userController');
const { checkToken } = require('../middleware/verifyToken');

router.get('/api/v1/users', checkToken, listUsers)

module.exports = router