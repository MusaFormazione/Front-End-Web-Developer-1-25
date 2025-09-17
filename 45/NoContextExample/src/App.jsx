import {useState} from "react"
import './App.css'


function LoginButton({onClick, isLoggedIn}) {
  return <button className="btn btn-primary" onClick={onClick}>
    {isLoggedIn ? "Logout" : "Login"}
  </button>
}

function Utente({isLoggedIn}) {
  return isLoggedIn ? <div>
      <h2>Benvenuto, Utente!</h2>
      <p>Hai effettuato l'accesso con successo.</p>
    </div> : <h2>Per favore, effettua il login.</h2>;
}

function Card({children, isLoggedIn}) {
  return <div className="card">
      <div className="card-body">
        <h5 className="card-title">No Context Example</h5>
        <p className="card-text">{children}</p>
        <Utente isLoggedIn={isLoggedIn} />
      </div>
    </div>
}

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div className="container">
      <h1>No Context Example</h1>
      <Card isLoggedIn={isLoggedIn} />
      <LoginButton onClick={() => setIsLoggedIn(p => !p)}  isLoggedIn={isLoggedIn}/>
    </div>
}

export default App
