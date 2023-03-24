const appPort = process.env.PORT
const jwtKey = process.env.JWT_KEY
const dbUsername = process.env.DB_USERNAME
const dbPass = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

const createdData = 201
const successOk = 200
const notFound = 404
const badRequest = 400
const notAuthorized = 401
const internalServerError = 500

const messageCreatedData = "Success created data"
const messageSuccessOk = "Success" 
const messageNotFound = "Failed, not found"
const messageBadRequest = "Failed, bad request!, please check payload!"
const messageInternalServError = "Upps, some think whent wronk!"
const messageHeaderAuthorized = "Token is required!"
const messageNotAuthorized = "Token not valid!"
const messageNotAccessModules = "Not access this module!"

module.exports = {
    appPort, internalServerError, 
    createdData, successOk, notFound, badRequest, notAuthorized, 
    messageCreatedData, messageSuccessOk, messageNotFound,
    messageBadRequest, messageInternalServError, jwtKey, messageNotAuthorized, messageHeaderAuthorized, 
    messageNotAccessModules, dbHost, dbName, dbPass, dbPort, dbUsername
}