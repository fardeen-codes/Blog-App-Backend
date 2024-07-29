// import mongoose
const mongoose = require('mongoose');

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
    },
    user: {
        type: String,
        data: true,
    },
    body: {
        type: String,
        data: true,
    }
})

// export
module.exports = mongoose.model('Comment', commentSchema)