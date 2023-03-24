const { successOk, messageSuccessOk } = require("../config/constant")
const { response } = require("../config/response")
const { insertAuth } = require('../services/authService');

const authStores = async (req, res) => {
    let insertUsers = await insertAuth(req.user)
    return response(res, successOk, true, messageSuccessOk, insertUsers)
}

module.exports = {
    authStores
}