const Post = require("../models/postModel") 

exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })
        const savedPost = await post.save();

        req.json({
            post: savedPost
        })
    } catch (error) {
        return res.status(500).json({
            error: "server error"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            error: "server error"
        })
    }
}