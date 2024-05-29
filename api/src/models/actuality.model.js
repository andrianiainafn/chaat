const mongoose = require('mongoose')
const {Schema} = mongoose

const actualitySchema = Schema({
    actu:[{
        type: Schema.Types.ObjectId,
        ref:'post'
    }]
})

module.exports = mongoose.model('actuality', actualitySchema)