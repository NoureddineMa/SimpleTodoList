import React from 'react'

function Input(props) {
  return (
    <input 
    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
    placeholder={props.placeholder} 
    />
    )
}

export default Input