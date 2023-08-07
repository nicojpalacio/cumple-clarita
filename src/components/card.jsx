import React from 'react'
import image from '../img/20230806_120518-COLLAGE.jpg'
import './card.css'
const card = () => {
    
  return (
    <div className='card h animate__animated animate__slideInUp animate__slow'>
        <img  src={image} alt="img-clara" />
        
    </div>
  )
}

export default card