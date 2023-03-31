const {Schema, model} = require('mongoose')

const Plastic = new Schema({
    hwid: {type: String, required: false, default: "none"},
    count: {type: Number, required: false, default: 0}
})

module.exports = model('Plastic', Plastic) 