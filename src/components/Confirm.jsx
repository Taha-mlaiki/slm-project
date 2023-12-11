import React from 'react'

const Confirm = ({formData}) => {
  return (
    <div>
    <h1 className='bg-success text-center text-white p-2'>succès</h1>
    <h2 className='mt-5 text-center fw-bold'>Merci {formData.firstNamecs} de votre participation</h2>
    <p className='text-center mt-3'>Vous recevrez un e-mail avec des instructions supplémentaires</p>
    <p><i className="fa-solid fa-check"></i></p>
    </div>
  )
}

export default Confirm
