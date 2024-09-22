const getAllTasks = (req, res) => {
    res.send('all items from the file')
}

const updateTasks = (req, res) => {
    res.send('update task')
}

const deleteTasks = (req, res) => {
    res.send('delete task')
}


const createTasks = (req, res) => {
    res.send('create task')
}

const getTask = (req, res) => {
    res.send('get task')
}



module.exports = {
    getAllTasks,
    updateTasks,
    deleteTasks,
    createTasks,
    getTask
}