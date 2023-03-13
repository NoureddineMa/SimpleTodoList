import React from 'react'

function Button(props) {
  return (
    <button 
        className={props.className} 
        onClick={props.onClick}>
        {props.contenu}    
    </button>
  )
}

export default Button