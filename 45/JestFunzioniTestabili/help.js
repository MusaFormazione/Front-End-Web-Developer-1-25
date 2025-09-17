console.log("Help: Comandi disponibili - start, help, test");
const help = [
  { comando: "start", descrizione: "Avvia l'applicazione" },
  { comando: "help", descrizione: "Mostra questo messaggio di aiuto" },
  { comando: "test", descrizione: "Esegui i test con Jest" }
]
console.table(help)
