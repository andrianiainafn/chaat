const mongoose = require('mongoose');
const {Schema} = mongoose
const userSchema = mongoose.Schema(
    {
        
        firstname:{
            type:String,
            required: true
        },
        lastname:{
            type:String,
        },
        birthday:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true
        },
        profilepicture:{
            type:String,
            default: ''
        },
        couverturepicture:{
            type:String,
            default: ''
        },
        bioraphie:{
            type:String,
            default: ''
        },
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
        request:[
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ],
        verified: {
            type:Boolean,
            default: false
        },
        saved:[{
            type: Schema.Types.ObjectId,
            ref:'post'
        }]
        
    },{
        timestamp: true
    }
)

module.exports = mongoose.model('user',userSchema)