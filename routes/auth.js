'use strict'
const express = require('express')
const router = express.Router();
var passport = require("passport");
const { authStores } = require('../controllers/authController');

router.get('/api/v1/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/api/v1/auth/google/callback', passport.authenticate('google', { failureRedirect: '/api/v1/auth' }), authStores);

module.exports = router