const db = require("../database/models")
const userModel = db.User
const { findAllData } = require('../repository/baseRepository')

const queryAllUsers = async (params) => {
    let request = await findAllData(userModel, findAllData)
    return request
}

module.exports= {
    queryAllUsers
}