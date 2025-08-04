import React from 'react'
import './ButtonSet.scss'

function ButtonSet () {
  // Set di pulsanti con stili diversi
  return (
    <div>
      <button className='btn btn-primary'>Primario</button>
      <button className='btn btn-success'>Successo</button>
      <button className='btn btn-danger'>Pericolo</button>
    </div>
  )
}

export default ButtonSet
