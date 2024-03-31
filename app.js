const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();
app.use(express.json());

const port = 3000;

app.use("/api/tasks", taskRoute);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log("server ok!"));
    } catch (err) {
        console.log(err);
    }
};

start();