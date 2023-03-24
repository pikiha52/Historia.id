const { successOk, messageSuccessOk } = require("../config/constant")
const { response } = require("../config/response")
const { queryAllUsers } = require("../services/userService")

const listUsers = async (req, res) => {
    let request = await queryAllUsers()
    return response(res, successOk, true, messageSuccessOk, request)
}

module.exports = {
    listUsers
}