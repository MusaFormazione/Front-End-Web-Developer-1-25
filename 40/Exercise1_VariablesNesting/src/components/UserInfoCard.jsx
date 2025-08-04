import React from 'react'
import './UserInfoCard.scss'

function UserInfoCard ({ user }) {
  // Componente che mostra le informazioni di un utente
  return (
    <div className='user-info-card'>
      <h2>{user.name}</h2>
      <p className='email'>{user.email}</p>
      <p className='bio'>{user.bio}</p>
    </div>
  )
}

export default UserInfoCard
