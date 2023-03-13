const mongoose = require('mongoose')


const TaskSchema = mongoose.Schema({
    task : {
        type: String,
        required: [true, 'please enter a Task']
    }
})


module.exports = mongoose.model('Task',TaskSchema)

