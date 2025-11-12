interface Animale {
  tipo: string
  peso: number
}


function recuperaIlPrimoElemento<T>(lista: T[]): T | null {
  if (lista.length > 0 ) {
    return lista[0]
  }
  console.log('La lista è vuota')
  return null
}

const listaStringhe = ['a', 'b']
const listaNumeri = [1, 3 ]
const listaAnimali = [
  { tipo: 'gatto', peso: 3 },
  { tipo: 'cane', peso: 8 }
]

const primaStringa = recuperaIlPrimoElemento<string>(listaStringhe)
const primoNumero = recuperaIlPrimoElemento<number>(listaNumeri)
const primoAnimale = recuperaIlPrimoElemento<Animale>(listaAnimali)

console.log(primaStringa)  // Output: 'a'
console.log(primoNumero)   // Output: 1
console.log(primoAnimale)  // Output: { tipo: 'gatto', peso: 3 }





