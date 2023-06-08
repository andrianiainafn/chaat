const  mongoose  = require('mongoose')
const {Schema} = mongoose

const messageSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    destination: {
        type: Schema.Types.ObjectId,
        refPath: 'destinationModel'
    },
    destinationModel: {
        type: String,
        enum: ['user', 'groupemessage']
    },
    message: String,
    media:String,
    conversation:{
        type: Schema.Types.ObjectId,
        ref:'conversation'
    },
    date: {
        type: Date,
        default: new Date()
    }
},
{
    timeistamp: true
}
)

module.exports = mongoose.model('message',messageSchema)