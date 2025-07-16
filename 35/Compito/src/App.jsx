import { useState, useEffect } from 'react'
import User from './User'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json()
      setUsers(users)
    }
    fetchUsers()
  }, [])

  const elementClass = 'col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3 p-2'
  return <div className='container'>
    <h1>Compito</h1>
    <div className='row'>
    { users && users.map(user => <div key={user.id} className={elementClass}>
      <User key={user.id} user={user} />
      </div>)
    }
    </div>
  </div>
}

export default App
