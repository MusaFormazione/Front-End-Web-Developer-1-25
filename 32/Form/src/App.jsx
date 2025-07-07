import { useRef, useState } from 'react'
import './App.css'

function App() {
  const nomeRef = useRef(null)
  const emailRef = useRef(null)
  const [statoForm, setStatoForm] = useState("not-verified")

  const check = () => {
    const nome = nomeRef.current.value
    const email = emailRef.current.value

    if (nome.length < 3) {
      setStatoForm("errato")
      return
    }

    if (!email.includes("@")) {
      setStatoForm("errato")
      return
    }

    setStatoForm("corretto")
  }

  const pulisci = () => {
    nomeRef.current.value = ""
    emailRef.current.value = ""
    setStatoForm("not-verified")
  }

  return <div className="container">
    <h1>Form</h1>
    <h3>Verifichiamo i dati</h3>
    <form className="border rounded p-4">
      <div className='mt-3'>
        {/* notare la utility me-5 per impostare margin-end 5 */}
        {/* https://getbootstrap.com/docs/5.3/utilities/spacing/ */}
        <label htmlFor="name" className='me-5'>Nome:</label>
        <input ref={nomeRef} type="text" className="form-control" id="name" name="name" placeholder="Inserisci il tuo nome" />
      </div>
      <div className='mt-3'>
        <label htmlFor="email" className='me-5'>Email:</label>
        <input ref={emailRef} type="email" className="form-control"  id="email" name="email" placeholder="Inserisci la tua email" />
      </div>
      {/* notare le utilty d-flex e justify-content-center */}
      {/* https://getbootstrap.com/docs/5.3/utilities/flex/ */}
      <div className='mt-3 d-flex justify-content-center'>
        <button type="button" className='btn btn-primary' onClick={check}>Verifichiamo</button>
        <button type="button" className='btn btn-secondary ms-3' onClick={pulisci}>Pulisci</button>
      </div>
      { statoForm  === "corretto" && <div class="mt-3 alert alert-success">ok</div> }
      { statoForm === "errato" && <div class="mt-3 alert alert-danger">errore</div> }
    </form>
  </div>
}

export default App
