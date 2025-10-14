

function saluto(nome) {
  return `Ciao ${nome}`
}

// Semplice middleware
function middlewareSaluto(action, payload) {
  return '\n--- contenuto decorato ---\n' +  action(payload) + '\n--- fine contenuto decorato  ---\n'
}

// middleware che gestisce una api esterna
async function middlewareGestioneSideEffect(action, payload) {
  // const data = await fetch(`https://api.example.com/${payload}`) <=== dovrebbe essere cosi
  const data = {  // simuliamo solo per l' esercizio
    ok: true,
    text : payload  // forzata per l' esempio ma possiamo immaginare come il dato di ritorno della nostra api
  }
  if (!data.ok) return action('Ospite')
  return action(data.text)
}

const utentiSalutati = []

const middlewareSalutoCalls = middlewareSaluto(saluto,"Gianni")
console.log(middlewareSalutoCalls)

const middlewareGestioneSideEffectCalls = await middlewareGestioneSideEffect(saluto, 'Anna')
console.log(middlewareGestioneSideEffectCalls)

