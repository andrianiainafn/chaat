const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = Schema(
    {
        author:{
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        description:{
            type: String
        },
        media:[String],
        love:[{
            type: Schema.Types.ObjectId,
            ref:'user'
        }]
        ,    
        comments:[{
            type: Schema.Types.ObjectId,
            ref:'comment'
        }],
        date: {
            type: Date,
            default: new Date()
        }
    },{
        timeistamp: true
    }
)

module.exports = mongoose.model('post', postSchema)