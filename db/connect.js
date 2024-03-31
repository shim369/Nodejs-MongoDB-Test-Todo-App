const mongoose = require("mongoose");


const connectDB = (url) => {
    return mongoose.connect(url)
    .then(() => console.log("Connecting to database!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;