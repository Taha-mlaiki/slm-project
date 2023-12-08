import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Inscription from './components/inscription'
function App() {

  return (
    <div className='row m-0'>
      <Landing />
      <Inscription />
    </div>
  )
}

export default App
