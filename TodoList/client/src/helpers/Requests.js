import Api from "./Api"

export async function postTask(data){
    const res = await Api.post('/posttask',data)
    return res.data
}

export async function getAllTasks(){
    const res = await Api.get('/getalltasks')
    return res.data
}

export async function deleteTask(id){
    const res = await Api.delete(`/deletetask/${id}`)
    return res.data
}