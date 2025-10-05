type Colore = "rosso" | "verde" | "blu"

type OggettoColorato = {
    nome: string
    colore: Colore
    peso: number
}

const oggetto1: OggettoColorato = {
    nome: "Palla",
    colore: "rosso",
    peso: 1.5
}

// const oggettoSbagliato: OggettoColorato = {
//     nome: "Cubo",
//     // Errore di tipo: il colore "giallo" non è valido
//     // colore: "giallo",
//     colore: "giallo",
//     peso: 2.0
// }

console.log(`L'oggetto ${oggetto1.nome} è di colore ${oggetto1.colore} e pesa ${oggetto1.peso} kg.`)
// accesso a elemento non esistente
// console.log(`L'oggetto ${oggetto1.altezza}`)
