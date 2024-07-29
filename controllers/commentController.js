// Import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business logic
exports.createComment = async (req, res) => {
    try {
        // Log the request body to check the incoming data
        console.log("Request Body:", req.body);

        // Fetch data from request body
        const { post, user, body } = req.body;

        // Check if all required fields are provided
        if (!post || !user || !body) {
            return res.status(400).json({
                message: 'Post ID, user, and body are required'
            });
        }

        // Create comment object
        const comment = new Comment({
            post, user, body
        });

        // Save the new comment object into the database
        const savedComment = await comment.save();

        // Find the Post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
        .populate("comments") // Populate the comments array with comment documents
        .exec();

        res.json({
            post: updatedPost,
        });
    } catch (err) {
        console.error("Error while creating comment:", err);
        return res.status(500).json({
            message: 'Error while creating comment',
            error: err.message
        });
    }
};
