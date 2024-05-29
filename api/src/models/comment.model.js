const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    description:String,
    love:[{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    response:[{
        type: Schema.Types.ObjectId,
        ref: 'commentresponse'
    }],
    media:String,
    date: {
        type: Date,
        default: new Date()
    }
    },{
        timeistamp: true
    },
    
)

module.exports = mongoose.model('comment',commentSchema)