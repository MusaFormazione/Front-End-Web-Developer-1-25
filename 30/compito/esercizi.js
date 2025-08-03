// --- Esercizio 1: forEach() ---
// Obiettivo: Imparare a iterare su ogni elemento di un array per eseguire un'azione specifica.

console.log('--- Esercizio 1: forEach() ---')
const listaSpesa = ['pane', 'latte', 'uova', 'frutta', 'verdura']

console.log('Articoli nella lista della spesa:')
listaSpesa.forEach((articolo, indice) => {
  console.log(`${indice + 1}. ${articolo}`)
})
console.log('\n') // Aggiunge una riga vuota per separare gli esercizi

// --- Esercizio 2: map() ---
// Obiettivo: Comprendere come trasformare ogni elemento di un array per creare un nuovo array con i risultati modificati.

console.log('--- Esercizio 2: map() ---')
const prezziSenzaIVA = [10, 25, 5, 120, 50] // Prezzi in Euro

console.log('Prezzi senza IVA:', prezziSenzaIVA)

const prezziConIVA = prezziSenzaIVA.map(prezzo => {
  const iva = prezzo * 0.22
  return prezzo + iva
})

console.log('Prezzi con IVA (22%):', prezziConIVA)
console.log('\n')

// --- Esercizio 3: filter() ---
// Obiettivo: Imparare a selezionare e creare un nuovo array contenente solo gli elementi che soddisfano una determinata condizione.

console.log('--- Esercizio 3: filter() ---')
const temperature = [15, 62, 30, 80, 45, 95, 20] // Esempio di temperature

console.log('Temperature registrate:', temperature)

const temperatureElevate = temperature.filter(temp => temp > 50)
// const temperatureElevateEstesa =
//   temperature.filter( (temp) => {
//     if (temp > 50) {
//       return true;
//     }
//     return false;
//   })

console.log('Temperature maggiori di 50:', temperatureElevate)
console.log('\n')

// --- Esercizio 4: reduce() ---
// Obiettivo: Comprendere come ridurre un array a un singolo valore applicando una funzione cumulativa a tutti gli elementi.

console.log('--- Esercizio 4: reduce() ---')
const carrello = [15.50, 8.20, 30.00, 2.75, 12.90] // Prezzi degli articoli

console.log('Articoli nel carrello:\t', carrello)

const totaleCarrello = carrello.reduce(
  (sommaParziale, prezzoArticolo) => sommaParziale + prezzoArticolo, 0.0) // Inizia la somma da 0

console.log('Totale da pagare:\t', totaleCarrello + '€')
console.log('\n')

// --- Esercizio 5: for...in ---
// Obiettivo: Imparare a iterare sulle chiavi (nomi delle proprietà) di un oggetto per accedere ai suoi valori.

console.log('--- Esercizio 5: for...in ---')
const prodotto = {
  nome: 'Smartphone X',
  marca: 'TechCorp',
  prezzo: 499.99,
  disponibile: true,
  colore: 'Nero'
}

console.log('Caratteristiche Prodotto:')
for (const caratteristica in prodotto) {
  // prodotto[caratteristica] equivale a fare prodotto['marca'] o prodotto['colore']
  console.log(`${caratteristica}: ${prodotto[caratteristica]}`)
}
console.log('\n')

// --- Esercizio 6: for...of ---
// Obiettivo: Imparare a iterare direttamente sui valori di un array o sui caratteri di una stringa.

console.log('--- Esercizio 6: for...of ---')
const coloriDisponibili = ['rosso', 'blu', 'verde', 'giallo']

console.log('Elenco Colori Disponibili:')
for (const colore of coloriDisponibili) {
  console.log(`- ${colore}`)
}

const parolaSegreta = 'codice'
console.log('\nLettere della Parola Segreta:')
for (const lettera of parolaSegreta) {
  console.log(`Lettera: ${lettera}`)
}
console.log('\n')

/// Esempio arrow function complessa
// const processaNuova = ( { propA, propB }) => ({ propA, propB, unione: propA+propB })

// const res = processaNuova({propA: 5, propB: 6 })

// console.log(res)
