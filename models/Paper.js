const {Schema, model} = require('mongoose')

const Paper = new Schema({
    hwid: {type: String, required: false, default: "none"},
})

module.exports = model('Paper', Paper) 