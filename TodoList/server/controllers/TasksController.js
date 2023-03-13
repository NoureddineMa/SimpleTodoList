const Task = require('../models/TasksModel')

/** 
Desc POST SINGLE TASK 
Route PORT : http://localhost:4000/api/posttask
*/ 
const CreateTask = async (req,res) => {
    const { task } = req.body;
    if(!task){
        res.json({message: "please fill all fields"})
        .status(400)
        return
    } 
    // task ? res.status(200) : res.status(400).json({message: "please fill all fields"}) 
    const data = await Task.create({ task })
    data ? res.status(200).json({message: "Task Added Succefully"}) : res.status(400).json({message: "Error"})
}
/** 
Desc POST SINGLE TASK  
Route PORT : http://localhost:4000/api/deletetask/:id
*/ 
const DeleteOneTask = async (req,res) => {
    const _id = req.params.id;
    const DeleteTask = await Task.findOneAndDelete({_id});
    DeleteTask ? res.status(200).json({message: "Task Deleted Succefully"}) : res.status(400).json({message: "An Error Occured"})
}
/** 
Desc POST SINGLE TASK 
Route PORT : http://localhost:4000/api/getalltasks
*/ 
const GetAllTasks = async (req,res) => {
    const getAll = await Task.find({})
    getAll ? res.status(200).json(getAll) : res.status(400).json({message : "No Task Founded !"})
}


module.exports = {
    CreateTask,
    DeleteOneTask,
    GetAllTasks
}