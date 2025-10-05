let nome: string = "Andrea"
nome = "Gabriele"
let eta: number = 40
let etaPerEsteso: string = "quaranta"
let haPassatoEsame: boolean = true
let nonValorizzato: null = null
let nonDefinito: undefined = undefined

function add(a: number, b: number): number {
  // Controllo Type-safe utile solo per JavaScript
  // if (typeof a !== "number" || typeof b !== "number") {
  //   return null
  // }
  return a + b
}

type ArithmeticOperationResult = number | null
function divide(a: number, b: number): ArithmeticOperationResult {
  if (b === 0) {
    return null
  }
  return a / b
}

const a: number = 10
const b: number = 20
const risultato = add(a, b)
//  questa funzionerebbe in JavaScript creando un problema a runtime e confusione a chi la usa
// const risultatoErrato = add(a, "20")

console.log(`La somma tra ${a} e ${b} è ${risultato}`)
