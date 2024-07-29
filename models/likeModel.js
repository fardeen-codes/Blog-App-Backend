// // import mongoose
// const mongoose = require('mongoose');

// // route handler
// const likeSchema = new mongoose.Schema({
//     post:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Post", // reference to the post model
//     },
//     user: {
//         type: String,
//         data: true,
//     },
// })

// //export
// module.exports = mongoose.model('Like', likeSchema)

//----------------------------------------------------------------------------------------------

// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },    
})


// Export 
module.exports = mongoose.model("Like",likeSchema)