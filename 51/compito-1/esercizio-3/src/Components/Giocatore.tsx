type Ruolo = "Portiere" | "Difensore" | "Centrocampista" | "Attaccante"

export interface Giocatore {
    maglia: number
    nome: string
    ruolo: Ruolo
    anni: number
}

interface Props {
    giocatore: Giocatore
    children?: React.ReactNode
}

function CartaGiocatore({giocatore, children}: Props) {
  const { maglia, nome, ruolo, anni } = giocatore;
  return <div className="border p-2 m-2">
    <h3>Maglia {maglia}: {nome}</h3>
    <p>Ruolo: {ruolo}</p>
    <p>Età: {anni}</p>
    {children && children}
  </div>
}

export default CartaGiocatore
