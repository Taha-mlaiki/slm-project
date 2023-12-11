import React, { useState } from 'react'
import Inscription from './components/Inscription'
import Landing from "./components/Landing"
import Confirm from './components/Confirm'
const Step = () => {

    const [formData,setFormData] = useState({
        step:1,
        firstName:"",
        lastName:""
    })

    function submit(){
        setFormData((prev)=>({
            ...prev,
            step: prev.step + 1
        }))
    }

  switch(formData.step){
    case 1 : return (
    <div className='row m-0'>
        <Landing />
        <Inscription submit={submit} formData={formData} setFormData={setFormData} />
    </div>
    )
    break;
    case 2 : return(
        <Confirm formData={formData}  />
    )
  }
}

export default Step
