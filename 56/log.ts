// Visualizza un semplice messaggio
console.log('Semplice messaggio')
// Emette un messaggio sulla console con la formattazione di un errore
console.error('Messaggio di errore')
// Visualizza dati tabellari in una tabella formattata e leggibile.
console.table([{nome: "Gianni", eta: 43}, {nome: "Giulia", eta: 34}])
// Rappresentazione interattiva gerarchica dell'oggetto JavaScript specificato.
console.dir({ carrozzeria: "cabrio", colore: "rosso", marca: "Alfa Romeo"})

try {
    const body = document.getElementsByTagName("body")[0];
    console.dir(body);
} catch (error) {
    console.error("Impossibile accedere al DOM in questo contesto.");
}
