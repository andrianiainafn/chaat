const mongoose = require('mongoose');
const {Schema} =  mongoose

const groupemessageSchema = Schema({
    members:[{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    name:String
})

module.exports = mongoose.model('messagegroupe',groupemessageSchema)