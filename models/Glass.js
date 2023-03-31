const {Schema, model} = require('mongoose')

const Glass = new Schema({
    hwid: {type: String, required: false, default: "none"},
    count: {type: Number, required: false, default: 0}
})

module.exports = model('Glass', Glass) 