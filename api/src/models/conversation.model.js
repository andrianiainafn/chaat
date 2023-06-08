const mongoose = require('mongoose');
const {Schema} = mongoose

const consversationSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    destination:{
        type: Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timeistamp:true
})

module.exports = mongoose.model('conversation',consversationSchema)