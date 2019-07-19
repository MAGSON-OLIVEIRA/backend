const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, requered: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, requered: true }
})
module.exports = restful.model('User', userSchema)