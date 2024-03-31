const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();

const port = 3000;

app.use("/api/tasks", taskRoute);

connectDB(process.env.MONGO_URI);

app.listen(port, console.log("server ok!"))