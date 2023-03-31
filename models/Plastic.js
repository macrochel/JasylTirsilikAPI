const {Schema, model} = require('mongoose')

const Plastic = new Schema({
    hwid: {type: String, required: false, default: "none"},
})

module.exports = model('Plastic', Plastic) 