const Task = require("../models/Task");

const getAllTasks = (req,res) => {
    res.send("get all task");
}

const createTask = async (req,res) => {
    try {
        const createTask = await Task.create(req.body);
        res.status(200).json(createTask);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSingleTask = (req,res) => {
    res.send("get task");
}

const updateTask = (req,res) => {
    res.send("update task");
}

const deleteTask = (req,res) => {
    res.send("delete task");
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};