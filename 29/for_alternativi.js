// Per eseguire questo file, usa il comando:
// node 29/for_alternativi.js

const numeri = [45, 77, 98]
numeri.forEach(numero => console.log(numero));
[66, 88, 99].forEach(numero => console.log(numero));
[11, 22, 33].forEach((numero, indice) => console.log(`Numero: ${numero}, Indice: ${indice}`))

const numeriMappati = numeri.map((numero, indice) => ({ numero, indice }))
const numeriMappati2 = numeri.map((numero, indice) => { return { numero, indice } })

const add = (a, b) => a + b

console.log(numeriMappati)

const persona = {
  nome: 'Gabriele',
  età: 30,
  città: 'Torino',
  altezza: 1.70
}

// elenco solo delle chiavi dell' oggetto persona
for (const chiave in persona) {
  console.log(`${chiave}`)
}
console.log(`persona['nome']: ${persona.nome}`) //
const chiave = 'nome'
console.log(`persona[chiave]: ${persona[chiave]}`) // persona['nome'] oppure persona.nome e` equivalente

for (const chiave in persona) {
  console.log(`${chiave}: ${persona[chiave]}`) // persona['nome'] oppure persona.nome e` equivalente
}

for (const numero of [54645, 3, 45, 67]) {
  console.log(`Recupero numero con for ... of  ${numero}`)
}

for (const indice in [54645, 3, 45, 67]) {
  console.log(`Recupero indice con for ... in  ${indice}`)
}
