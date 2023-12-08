import React from 'react'
import Forms from './Forms'
const Inscription = () => {
  return (
    <div className='inscription col-sm-6'>
        <h3>Demande D'inscription<i class="fa-solid fa-house"></i></h3>
        <div className='camera'>
        <i class="fa-solid fa-camera-retro"></i>
        </div>
        <p>Photo</p>
        <Forms />
    </div>
  )
}

export default Inscription
