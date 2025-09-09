const citta = {
  name: 'trento',
  stato: 'italia'
}

const citta_due = {
  name: 'parma',
  stato: 'italia'
}

const lista = [citta, citta_due]

const { name } = citta
console.log(name)

// const [prima, seconda] = lista
// se devo destrutturare un array e mi serve solo il secondo elemento ad esempio, posso usare _ al posto
// del nome del primo elemento destrutturato
const [_, seconda] = lista
console.log(seconda)
