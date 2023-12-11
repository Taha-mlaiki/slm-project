import React from 'react'
import Forms from './Forms'
const Inscription = ({submit,formData,setFormData}) => {
  return (
    <div className='inscription col-sm-6'>
        <h3>Demande D'inscription<i className="fa-solid fa-house"></i></h3>
        <div className='camera'>
        <i className="fa-solid fa-camera-retro"></i>
        </div>
        <p>Photo</p>
        <Forms submit={submit} formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default Inscription
