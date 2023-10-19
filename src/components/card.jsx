import React from 'react'
import image from '../img/IMG_20230825_151050.jpg'
import './card.css'
const card = () => {
    
  return (
    <div className='card h animate__animated animate__slideInUp animate__slow'>
        <img  src={image} alt="img-clara" />
        
    </div>
  )
}

export default card