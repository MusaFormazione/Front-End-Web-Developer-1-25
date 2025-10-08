import Container from './Components/Container'
import CartaGiocatore from './Components/Giocatore'
import type { Giocatore } from './Components/Giocatore'

function App() {
  const squadra: Giocatore[] = [
    {maglia: 1, nome: "Rossi", ruolo: "Portiere", anni: 30},
    {maglia: 10, nome: "Bianchi", ruolo: "Attaccante", anni: 25},
    {maglia: 5, nome: "Verdi", ruolo: "Centrocampista", anni: 28},
    {maglia: 3, nome: "Viola", ruolo: "Difensore", anni: 32},
  ]
  return <Container>
    { squadra.map(g => <CartaGiocatore key={g.maglia} giocatore={g} />) }
  </Container>
}

export default App
