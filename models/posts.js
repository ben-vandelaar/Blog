const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    image: {
        type: String,
        required: false
    }
}
)

module.exports = Post = mongoose.model('post', postSchema)