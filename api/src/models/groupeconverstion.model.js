const mongoose = require('mongoose');
const {Schema} = mongoose;

const groupeconversationSchema = new Schema({
    pepeol: [
        {
        type: Schema.Types.ObjectId,
        ref:'user'
        }
    ]
},{
    timestamps: true
}
)
module.exports = mongoose.model('groupeconversation',groupeconversationSchema)