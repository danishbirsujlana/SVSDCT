const { model, Schema } = require('mongoose');

const BlackListSchema = new Schema({
    token: { type: String }
})

const BlackListModel = model('blackList', BlackListSchema);

module.exports = BlackListModel