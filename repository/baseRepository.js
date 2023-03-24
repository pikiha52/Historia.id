const findAllData = (model, params) => {
    return model.findAll()
}

const insertOne = (model, params) => {
    return model.create(params)
}

const findOneData = (model, params) => {
    return model.findOne(params)
}

module.exports = {
    findAllData, insertOne, findOneData
}