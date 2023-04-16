const mongoose = require('mongoose');

const logeventSchema = mongoose.Schema({
    createdAt: {type: Date,expires:60,default: Date.now},
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    code: Number
}) 
 logeventSchema.index({"createdAt": 1}, {expireAfterSeconds:60})

module.exports = mongoose.model('logevent',logeventSchema)