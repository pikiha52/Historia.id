const { notAuthorized, messageNotAuthorized, jwtKey } = require('../config/constant')
const { response } = require("../config/response")
const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    if (!req.headers.hasOwnProperty('authorization')) {
        return response(res, notAuthorized, false, messageNotAuthorized)
    }

    let token = req.headers.authorization.split(" ")[1]
    let data = jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) {
            return err
        }
    });

    if (!data) {
        req.headers.token = token
        return next()
    }

    return response(res, notAuthorized, false, data.message)
}

module.exports = {
    checkToken
}