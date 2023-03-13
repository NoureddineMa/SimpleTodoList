import React from 'react'

function Button(props) {
  return (
    <button 
        className={props.className}>
        {props.contenu}    
    </button>
  )
}

export default Button