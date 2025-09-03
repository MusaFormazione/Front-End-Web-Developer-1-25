
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router'
import './App.css'

function Navbar() {
  const navigate = useNavigate();
  return <nav class="navbar mb-4 bg-light border rounded p-2">
    <div class="container-fluid">
      <a className="nav-link btn" onClick={() => navigate('/')}>Home</a>
      <a className="nav-link btn" onClick={() => navigate('/about')}>About</a>
      <a className="nav-link btn" onClick={() => navigate('/contact')}>Contact</a>
    </div>
  </nav>
}
function Home() {
  return <div className='container'>
      <h2>Home</h2>
      <Navbar />
      <p>Benvenuto nella home page!</p>
      <p>
        Per andare alle altre sezioni prova a digitare
        /about o /contact nell'url del browser
      </p>
    </div>
}

function About() {
  const navigate = useNavigate();
  return <div className='container'>
      <h2>About</h2>
      <Navbar />
      <p>Questa è la pagina about.</p>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>
        Vai alla pagina precedente
      </button>
    </div>
}

function Contact() {
  const navigate = useNavigate();
  return <div className='container'>
      <h2>Contact</h2>
      <Navbar />
      <p>Contattaci a questo indirizzo email.</p>
      <button className='btn btn-primary' onClick={() => navigate('/home')}>
        Vai alla home
      </button>
    </div>
}


function App () {
  return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
}

export default App
