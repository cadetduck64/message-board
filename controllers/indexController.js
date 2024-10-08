const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId();

const query = require('../database/queries.js')

const getAllMessagesController = (req, res) => {
    return query.getAllMessagesQuery()
}

const newMessageController = (req, res) => {
    console.log(req)
    return query.newMessageQuery(req, res)
}

const getMessageDetailController = (req, res) => {
    return query.getMessageDetailsQuery(req.params.id) 
}

module.exports = {
    getAllMessagesController,
    newMessageController,
    getMessageDetailController
}