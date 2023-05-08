const mongoose = require('mongoose')
const {Schema} = mongoose

const notificationSchema = Schema({
    reference: {
        type: Schema.Types.ObjectId,
        reference: ['post','page','user']
    },
    description: String,
    

})