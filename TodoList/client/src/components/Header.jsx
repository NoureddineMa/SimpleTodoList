import { useState , useEffect  } from 'react'
import {postTask} from '../helpers/Requests'
import React from 'react'
import Button from './Button'
import Input from './Input'

function Header() {

  const [task ,setTask] = useState()
  
  const handleTask = async (e) => {
    return setTask(e.target.value)
  }

  const addTask = async (e) => {
    e.preventDefault()
    const data = {
      task
    }
    try {
        const result = await postTask(data)
        console.log(result.message);
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    addTask();
  }, [])

  return (
    <div class="flex mt-4">
    <Input placeholder="Add todo" onChange={handleTask} />
    <Button
    onClick={addTask} 
    contenu="Add Task" 
    className="flex-no-shrink p-2 ml-2 border-2 rounded  border-red text-white bg-green-500" />
</div>
    )
}

export default Header