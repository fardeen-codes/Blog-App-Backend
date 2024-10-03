// Import the Express framework
const express = require("express");

// Create an instance of an Express application
const app = express();

// Load environment variables from the .env file
require("dotenv").config();

// Set the port to the value from the environment or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import the blog routes
const blog = require('./routes/blog');

// Mount the blog routes under the /api/v1 path
app.use("/api/v1", blog);

// Import the database connection configuration
const connectWithDb = require("./config/database");
// Establish a connection to the database
connectWithDb();

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

// Define a route for the home page
app.get('/', (req, res) => {
    // Respond with a simple message
    res.send('Home Page!');
});
