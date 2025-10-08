type Ruolo = "Portiere" | "Difensore" | "Centrocampista" | "Attaccante"

interface Giocatore {
    maglia: number
    nome: string
    ruolo: Ruolo
}

function aggiungiGiocatore(giocatore: Giocatore, squadra: Giocatore[]): Giocatore[] {
  if(giocatore.maglia < 1 || giocatore.maglia > 11) {
    return squadra
  }
  if(giocatore.maglia === 1 && giocatore.ruolo !== "Portiere") {
    return squadra
  }
  if(giocatore.maglia !== 1 && giocatore.ruolo === "Portiere") {
    return squadra
  }
  if(squadra.find(g => g.maglia === giocatore.maglia)) {
    return squadra
  }
  if(squadra.find(g => g.nome === giocatore.nome)) {
    return squadra
  }
  return [...squadra, giocatore]
}

function campionato() {
  let squadra: Giocatore[] = []
  const giocatore1: Giocatore = {maglia: 1, nome: "Rossi", ruolo: "Portiere"}
  const giocatore2: Giocatore = {maglia: 10, nome: "Bianchi", ruolo: "Attaccante"}
  const giocatore3: Giocatore = {maglia: 5, nome: "Verdi", ruolo: "Centrocampista"}
  const giocatore4: Giocatore = {maglia: 15, nome: "Neri", ruolo: "Difensore"} // Non valido maglia > 11
  const giocatore5: Giocatore = {maglia: 2, nome: "Gialli", ruolo: "Portiere"} // Non valido ruolo Portiere con maglia diversa da 1
  const giocatore6: Giocatore = {maglia: 1, nome: "Blu", ruolo: "Difensore"} // Non valido gia esiste maglia 1
  const giocatore7: Giocatore = {maglia: 6, nome: "Rossi", ruolo: "Centrocampista"} // Non valido (già esiste un Rossi)
  const giocatore8: Giocatore = {maglia: 3, nome: "Viola", ruolo: "Difensore"} // Valido
  const giocatore9: Giocatore = {maglia: 4, nome: "Arancioni", ruolo: "Difensore"} // Non valido ruolo non esistente
  squadra = aggiungiGiocatore(giocatore1, squadra)
  squadra = aggiungiGiocatore(giocatore2, squadra)
  squadra = aggiungiGiocatore(giocatore3, squadra)
  squadra = aggiungiGiocatore(giocatore4, squadra)
  squadra = aggiungiGiocatore(giocatore5, squadra)
  squadra = aggiungiGiocatore(giocatore6, squadra)
  squadra = aggiungiGiocatore(giocatore7, squadra)
  squadra = aggiungiGiocatore(giocatore8, squadra)
  squadra = aggiungiGiocatore(giocatore9, squadra)

  console.log("Squadra di calcio:")
  squadra.forEach(giocatore => {
    console.log(`⚽ Maglia ${giocatore.maglia}: ${giocatore.nome} - ${giocatore.ruolo}`)
  })
}

campionato()
