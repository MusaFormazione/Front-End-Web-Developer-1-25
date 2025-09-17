/**
 * Modulo calcolatrice con funzioni aritmetiche di base
 */

/**
 * Calcola la somma di due numeri
 * @param {number} a - Primo addendo
 * @param {number} b - Secondo addendo
 * @returns {number} La somma dei due numeri
 */
function somma(a, b) {
  return a + b;
}

/**
 * Calcola la differenza tra due numeri
 * @param {number} a - Minuendo
 * @param {number} b - Sottraendo
 * @returns {number} La differenza tra i due numeri
 */
function sottrazione(a, b) {
  return a - b;
}

/**
 * Calcola il prodotto di due numeri
 * @param {number} a - Primo fattore
 * @param {number} b - Secondo fattore
 * @returns {number} Il prodotto dei due numeri
 */
function moltiplicazione(a, b) {
  return a * b;
}

/**
 * Calcola il quoziente di due numeri
 * @param {number} a - Dividendo
 * @param {number} b - Divisore
 * @returns {number|string} Il quoziente o un messaggio di errore se si divide per zero
 */
function divisione(a, b) {
  if (b === 0) {
    return "Errore: divisione per zero";
  }
  return a / b;
}

/**
 * Calcola la potenza di un numero (base elevata a esponente)
 * @param {number} base - Base
 * @param {number} esponente - Esponente
 * @returns {number} La potenza calcolata
 */
function potenza(base, esponente) {
  return Math.pow(base, esponente);
}

console.log("Calcolatrice pronta all'uso!");
console.log("Esempio: 2 + 3 =", somma(2, 3));
console.log("Esempio: 5 - 2 =", sottrazione(5, 2));
console.log("Esempio: 4 * 3 =", moltiplicazione(4, 3));
console.log("Esempio: 10 / 2 =", divisione(10, 2));
console.log("Esempio: 2 ^ 3 =", potenza(2, 3));

// Esporta le funzioni del modulo
export default {
  somma,
  sottrazione,
  moltiplicazione,
  divisione,
  potenza
};
