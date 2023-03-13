import React from 'react'
import Button from './Button'
import {getAllTasks} from '../helpers/Requests'
import { useState } from 'react'

function Tasks() {

  return (
    <div class="flex mb-4 items-center">
    <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
    <Button contenu="Done" className="flex-no-shrink p-2 ml-2 border-2 rounded  border-red text-white bg-red-500" />
    </div>
  )
}

export default Tasks