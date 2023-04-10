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
        }]
    },{
        timeistamp: true
    }
)

module.exports = mongoose.model('post', postSchema)