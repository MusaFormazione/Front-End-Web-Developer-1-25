const Persona = {
  nome: 'Mario',
  cognome: 'Rossi'
}

// destrutturazione dell'oggetto Persona
const { nome } = Persona

// console.log(nome) // Stampa "Mario"

function TitleProva (props) {
  const { color } = props
}

// const Props = { children: 'Ciao', color: 'blue' }
function Title ({ children, color = 'black' }) {
  return (
    <h1 style={{ color }}>
      {children}
    </h1>
  )
}

export default Title
