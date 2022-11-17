import React from 'react'
import './Button.scss';

const Button = (props) => {
  return (
    <div className='button__box'>     
        <button className='button' >{props.text}</button>              
    </div>    
    
  )
}

export {Button};




