import React from 'react'
import './Button.scss';

const Button = (props) => {
  return (
    <div className='button__box'>     
        <button 
          onClick={props.function}
          className='button' >
          {props.icon}
        </button>              
        <div className='button__shadow'></div>
    </div>    
    
  )
}

export {Button};




