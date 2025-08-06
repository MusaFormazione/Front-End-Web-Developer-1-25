import React from 'react'
import './ButtonSet.scss'

function ButtonSet () {
  // Set di pulsanti con stili diversi
  return (
    <div>
      <button className='btn'>Semplice</button>
      <button className='btn-primary'>Primario</button>
      <button className='btn-success'>Successo</button>
      <button className='btn-danger'>Pericolo</button>
      <button className='btn-warning'>Attenzione</button>
      <button className='btn-black'>Nero</button>
    </div>
  )
}

export default ButtonSet
