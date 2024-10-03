// Import the Post model for interacting with the posts collection in the database
const Post = require("../models/postModel");

// Controller function to create a new post
exports.createPost = async (req, res) => {
    try {
        // Destructure title and body from the request body
        const { title, body } = req.body;
        
        // Create a new post instance with the provided title and body
        const post = new Post({
            title, 
            body
        });

        // Save the post to the database and wait for the operation to complete
        const savedPost = await post.save();

        // Respond with the saved post data
        res.json({
            post: savedPost
        });
    } catch (error) {
        // Handle any errors that occur during the process
        return res.status(500).json({
            error: "server error" // Send a generic server error response
        });
    }
};

// Controller function to retrieve all posts
exports.getAllPosts = async (req, res) => {
    try {
        // Find all posts in the database and populate associated comments
        const posts = await Post.find().populate("comments").exec();
        
        // Respond with the retrieved posts
        res.json({
            posts
        });
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        return res.status(500).json({
            error: "server error" // Send a generic server error response
        });
    }
};
