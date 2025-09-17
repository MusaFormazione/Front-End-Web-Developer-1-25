let parametroGlobale = "parametro di test";

/**
 * Funzione pura di esempio
 * @param {string} parametro - Il parametro da elaborare
 * @returns {string} - Il risultato dell'elaborazione
 */
function pura(parametro) {
  return `Funzione pura eseguita con parametro: ${parametro}`;
}

/**
 * Funzione impura di esempio
 * @returns {string} - Il risultato dell'elaborazione
 */
function impura() {
  return `Funzione impura eseguita con prametro globale: ${parametroGlobale}`;
}

function impuraSideEffect() {
  parametroGlobale += " parametro modificato";
  return `Funzione impura con effetto collaterale, nuovo parametro globale: ${parametroGlobale}`;
}

console.log("Esempio di funzioni testabili in JavaScript");
console.log("Funzione pura:", pura("test"));
console.log("Funzione impura:", impura());
console.log("Funzione impura con effetto collaterale:", impuraSideEffect());
console.log("Modifica il parametro globale e richiama la funzione impura:");
parametroGlobale = "nuovo parametro di test";
console.log("Funzione pura 'e idempotente':", pura("test"));
console.log("Funzione impura dopo modifica:", impura());
console.log("Funzione impura con effetto collaterale dopo modifica:", impuraSideEffect());

export { pura, impura, impuraSideEffect };
