// estendo il mio funzionamento attraverso la composizione di funzioni
function primoOrdine( funzioneParametro) {
  console.log("funzione di primoOrdine fa Qualcosa")
  funzioneParametro();
}

primoOrdine(() => { console.log("Funzione passata come parametro") });

function addizioneERendering( a, b, funzioneDiRendering) {
  const risultato = a + b;
  console.log("Funzione addizioneERendering fa Qualcosa")
  return funzioneDiRendering(risultato);
}

function rendering(parametro) {
  return `<p>Il risultato è: ${parametro}</p>`;
}

function renderingComeTitolo(parametro) {
  return `<h1>Il risultato è: ${parametro}</h1>`;
}

const risultato = addizioneERendering(5, 10, rendering);
console.log(risultato);
const risultatoComeTitolo = addizioneERendering(5, 10, renderingComeTitolo);
console.log(risultatoComeTitolo);

// In React componiamo come le funzioni i componenti\
// <ComponenteAltoLivello>
//   <ComponenteInterno />
// </ComponenteAltoLivello>


function funzionePura(a, b) {
  console.log("Funzione pura fa Qualcosa")
  return a + b;
}

let valoreEsterno = 10;

function funzioneImpura( a, b) {
  console.log("Funzione impura fa Qualcosa")
  return a + b + valoreEsterno;
}

funzioneImpura(5, 10); // 25 perch'e valoreEsterno è 10
valoreEsterno = 20; // Modifico il valore esterno
funzioneImpura(5, 10); // 35 ora è 35 perchè valore
