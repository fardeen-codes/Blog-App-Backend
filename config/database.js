const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection established"))
    .catch(err => {
         console.error("DB connection error:", err);
         process.exit(1);
     });
}

module.exports = connectWithDb;