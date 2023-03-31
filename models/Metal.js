const {Schema, model} = require('mongoose')

const Metal = new Schema({
    hwid: {type: String, required: false, default: "none"},
})

module.exports = model('Metal', Metal) 