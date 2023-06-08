const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentresponseSchema = Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    description:String,
    love:[{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    media:String,
    date: {
        type: Date,
        default: new Date()
    }
    },{
        timeistamp:true
    }
)

module.exports = mongoose.model('commentresponse',commentresponseSchema)