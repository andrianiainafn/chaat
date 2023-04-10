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
    media:String
    },{
        timeistamp: true
    }
)

module.exports = mongoose.model('comment',commentSchema)