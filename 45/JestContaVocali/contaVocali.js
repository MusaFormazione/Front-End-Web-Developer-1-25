// contaVocali.js
// Funzione che conta il numero di vocali in una stringa
// Accetta sia maiuscole che minuscole
function contaVocali(str) {
  // Definiamo le vocali
  const vocali = 'aeiouAEIOU'
  // Inizializziamo il contatore
  let count = 0
  // Cicliamo ogni carattere della stringa
  for (let char of str) {
    if (vocali.includes(char)) {
      count++
    }
  }
  return count
}

console.log("Programma contaVocali pronto all'uso!");
console.log("Esempio: 'Ciao Mondo' ha", contaVocali('Ciao Mondo'), "vocali.");
console.log("Esempio: 'aeiouAEIOU' ha", contaVocali('aeiouAEIOU'), "vocali.");
console.log("Esempio: 'bcdfg' ha", contaVocali('bcdfg'), "vocali.");

export default contaVocali
