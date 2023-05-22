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
    message: String
},
{
    timeistamp: true
}
)

module.exports = mongoose.model('message',messageSchema)