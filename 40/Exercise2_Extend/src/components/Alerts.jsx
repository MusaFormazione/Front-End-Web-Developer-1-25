import React from 'react'
import './Alerts.scss'

function Alerts () {
  // Componente che mostra diversi tipi di allerte
  return (
    <div className='container'>
      <div className='alert-info'>Questa è un'informazione.</div>
      <div className='alert-success'>Operazione completata con successo!</div>
      <div className='alert-warning'>Attenzione: si è verificato un problema.</div>
      <div className='alert-danger'>Errore: si è verificato un errore critico!</div>
    </div>
  )
}

export default Alerts
