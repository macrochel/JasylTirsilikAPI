const {Schema, model} = require('mongoose')

const Glass = new Schema({
    hwid: {type: String, required: false, default: "none"},
})

module.exports = model('Glass', Glass) 