const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks")

const port = 3000;

app.use("/api/tasks", taskRoute);

app.listen(port, console.log("server ok!"))