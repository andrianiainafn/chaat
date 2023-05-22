const mongoose = require('mongoose');
const {Schema} = mongoose

const consversationSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    destination:{
        type: Schema.Types.ObjectId,
        ref:['user','groupemessage']
    },
    message:{
        type: Schema.Types.ObjectId,
        ref:'message'
    }
})

module.exports = mongoose.model('conversation',consversationSchema)