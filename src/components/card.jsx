import React from 'react'
import image from '../img/WhatsApp Image 2023-10-18 at 11.18.14 PM.jpeg'
import './card.css'
const card = () => {
    
  return (
    <div className='card h animate__animated animate__slideInUp animate__slow'>
        <img  src={image} alt="img-clara" />
        
    </div>
  )
}

export default card