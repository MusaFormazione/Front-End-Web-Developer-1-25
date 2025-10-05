type Eta = number | string
type Giocatore = {
    nome: string
    ruolo:string
    numero: number
    squadra: string
    eta: Eta
}

const giocatore1: Giocatore = {
    nome: "Andrea",
    ruolo: "Attaccante",
    numero: 9,
    squadra: "Juventus",
    eta: 30
}

const giocatore2: Giocatore = {
    nome: "Gabriele",
    ruolo: "Difensore",
    numero: 5,
    squadra: "Milan",
    eta: "venticinque"
}

// Errore di tipo: numero deve essere di tipo number
// const giocatoreErrato: Giocatore = {
//     nome: "Luca",
//     ruolo: "Centrocampista",
//     numero: "8",
//     squadra: "Inter"
//     // età: 25 // Errore: la proprietà 'età' non esiste nel tipo 'Giocatore'
// }

const squadra: Giocatore[] = [giocatore1, giocatore2]

for ( const giocatore of squadra) {
    console.log(`Il giocatore ${giocatore.nome} gioca come ${giocatore.ruolo} nella squadra ${giocatore.squadra} con il numero ${giocatore.numero}.`)
}
