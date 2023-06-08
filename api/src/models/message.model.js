const  mongoose  = require('mongoose')
const {Schema} = mongoose

const messageSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: ['user','groupemessage']
    },
    message: String,
    conversation:{
        type: Schema.Types.ObjectId,
        ref:'conversation'
    },
    createdAt: Date.now(),
},
{
    timeistamp: true
}
)

module.exports = mongoose.model('message',messageSchema)