import { createContext, useContext, useState } from 'react'
import './App.css'

const ThemeContext = createContext('light-theme')
const AuthenticationContext = createContext(false)
function Title ({ children }) {
  const theme = useContext(ThemeContext)
  return <h2 className={theme}>{children}</h2>
}

function Paragraph ({ children }) {
  const isAuthenticated = useContext(AuthenticationContext)
  const theme = useContext(ThemeContext)
  return <p className={theme}>{isAuthenticated ? children : 'Devi essere autenticato per vedere questo contenuto.'}</p>
}


function Container ({children}) {
  return <div className="container">{children}</div>
}

function UserInfo() {
  return <Paragraph>Content</Paragraph>
}

function App () {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  return <>
  <h1 className='m-3'>Use Context</h1>
  <ThemeContext.Provider value="dark-theme">
  <AuthenticationContext.Provider value={isAuthenticated}>
    <Container>
      <Title>Dark Themed Title</Title>
      <UserInfo />
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>{isAuthenticated ? 'Logout' : 'Login'}</button>
    </Container>
  </AuthenticationContext.Provider>
  </ThemeContext.Provider>
  <ThemeContext.Provider value="light-theme">
    <Container>
      <Title>Light Themed Title</Title>
    </Container>
  </ThemeContext.Provider>
  </>
}

export default App
