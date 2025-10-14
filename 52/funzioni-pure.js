
// Non ha effetti collaterali (side effects)
// Restituisce sempre lo stesso output per gli stessi input, è idempotente, ovvero deterministica
// creare test per verificare che la funzione sia pura è semplice
function pura(nome) {
    return `Ciao ${nome}!`;
}

// Non è idempotente, ovvero non è deterministica
// perché se la chiamo più volte con lo stesso argomento,
// restituisce risultati diversi
let saluti = ""
function Nonpura(nome) {
    saluti += `Ciao ${nome}!\n`;
    return saluti;
}

// Ha effetti collaterali (side effects)
async function effettiCollaterali() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json();
  resturn data;
}

