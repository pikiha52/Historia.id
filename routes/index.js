'use strict'
const express = require('express')
const auth = require('../routes/auth')
const users = require('../routes/user')
const router = express()

router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Welcome to api Historia.id"
    })
})

router.use(auth)
router.use(users)

module.exports = router