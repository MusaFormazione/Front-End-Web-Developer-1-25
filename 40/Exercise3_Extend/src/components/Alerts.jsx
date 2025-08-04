import React from 'react'
import './Alerts.scss'

function Alerts () {
  // Componente che mostra diversi tipi di allerte
  return (
    <div>
      <div className='alert alert-info'>Questa è un'informazione.</div>
      <div className='alert alert-success'>Operazione completata con successo!</div>
      <div className='alert alert-warning'>Attenzione: si è verificato un problema.</div>
    </div>
  )
}

export default Alerts
