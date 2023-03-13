import React from 'react'
import Button from './Button'
import Input from './Input'

function Header() {
  return (
    <div class="flex mt-4">
    <Input placeholder="Add todo" />
    <Button contenu="Add Task" className="flex-no-shrink p-2 ml-2 border-2 rounded  border-red text-white bg-green-500" />
</div>
    )
}

export default Header