import React from 'react'
import './Card.scss';

const Card = (props) => {
  return (
    <div className='card'>
        <p className ='card__name'>{props.name}</p>
        <div className ='card__circle'></div>
        <img className ='card__img' src={props.img} alt='pokemon img'></img>
        <p className='card__data'>{props.nature}</p>
    </div>
  )
}

export {Card}
