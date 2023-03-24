const db = require("../database/models")
const userModel = db.User
const { insertOne, findOneData } = require('../repository/baseRepository')
const jwt = require('jsonwebtoken')
const { jwtKey } = require('../config/constant')

const insertAuth = async (payload) => {
    let params = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    let paramsFind = { where: { email: payload.email } }
    let findOneUser = await findOneData(userModel, paramsFind)
    
    let userId = 0
    let firstName = ''
    let lastName = ''
    if (findOneUser == null) {
        let request = await insertOne(userModel, params)
        userId = request.id
        firstName = request.firstName
        lastName = request.lastName
    }

    userId = findOneUser.id
    firstName = findOneUser.firstName
    lastName = findOneUser.lastName

    let payloadJwt = {
        userId: userId,
        email: params.email
    }

    let expJwt = '1d'

    var token = jwt.sign(payloadJwt, jwtKey, {
        expiresIn: expJwt
    });

    let data = {
        firstName: firstName,
        lastName: lastName,
        token: token
    }

    return data
}

module.exports = {
    insertAuth
}