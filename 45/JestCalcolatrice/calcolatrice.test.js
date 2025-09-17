/**
 * Test unitari per il modulo calcolatrice
 */

// Importa il modulo da testare
import calcolatrice from './calcolatrice.js';

// Test per la funzione somma
describe('Funzione somma', () => {
  // Test caso standard
  test('somma 2 + 3 deve essere 5', () => {
    // Verifica che 2 + 3 sia uguale a 5
    expect(calcolatrice.somma(2, 3)).toBe(5);
  });

  test('somma 2 + 3 non deve essere 6', () => {
    // Verifica che 2 + 3 non sia uguale a 6
    expect(calcolatrice.somma(2, 3)).not.toBe(6);
  });

  // Test con numeri negativi
  test('somma -5 + 3 deve essere -2', () => {
    expect(calcolatrice.somma(-5, 3)).toBe(-2);
  });
});

// Test per la funzione sottrazione
describe('Funzione sottrazione', () => {
  // Test caso standard
  test('sottrazione 5 - 3 deve essere 2', () => {
    // Verifica che 5 - 3 sia uguale a 2
    expect(calcolatrice.sottrazione(5, 3)).toBe(2);
  });

  test('sottrazione 5 - 3 non deve essere 3', () => {
    // Verifica che 5 - 3 non sia uguale a 3
    expect(calcolatrice.sottrazione(5, 3)).not.toBe(3);
  });

  // Test con numeri che producono risultato negativo
  test('sottrazione 3 - 5 deve essere -2', () => {
    expect(calcolatrice.sottrazione(3, 5)).toBe(-2);
  });
});

// Test per la funzione moltiplicazione
describe('Funzione moltiplicazione', () => {
  // Test caso standard
  test('moltiplicazione 4 * 5 deve essere 20', () => {
    // Verifica che 4 * 5 sia uguale a 20
    expect(calcolatrice.moltiplicazione(4, 5)).toBe(20);
  });

  test('moltiplicazione 4 * 5 non deve essere 21', () => {
    // Verifica che 4 * 5 non sia uguale a 21
    expect(calcolatrice.moltiplicazione(4, 5)).not.toBe(21);
  });

  // Test con moltiplicazione per zero
  test('moltiplicazione 4 * 0 deve essere 0', () => {
    expect(calcolatrice.moltiplicazione(4, 0)).toBe(0);
  });
});

// Test per la funzione divisione
describe('Funzione divisione', () => {
  // Test caso standard
  test('divisione 10 / 2 deve essere 5', () => {
    // Verifica che 10 / 2 sia uguale a 5
    expect(calcolatrice.divisione(10, 2)).toBe(5);
  });

  test('divisione 10 / 2 non deve essere 6', () => {
    // Verifica che 10 / 2 non sia uguale a 6
    expect(calcolatrice.divisione(10, 2)).not.toBe(6);
  });

  // Test caso limite: divisione per zero
  test('divisione 10 / 0 deve restituire un messaggio di errore', () => {
    expect(calcolatrice.divisione(10, 0)).toBe("Errore: divisione per zero");
  });

  // Test con decimali
  test('divisione 5 / 2 deve essere 2.5', () => {
    expect(calcolatrice.divisione(5, 2)).toBe(2.5);
  });
});

// Test per la funzione potenza (funzionalità extra)
describe('Funzione potenza', () => {
  // Test caso standard
  test('potenza 2^3 deve essere 8', () => {
    // Verifica che 2^3 sia uguale a 8
    expect(calcolatrice.potenza(2, 3)).toBe(8);
  });

  test('potenza 2^3 non deve essere 9', () => {
    // Verifica che 2^3 non sia uguale a 9
    expect(calcolatrice.potenza(2, 3)).not.toBe(9);
  });

  // Test con esponente 0
  test('potenza 5^0 deve essere 1', () => {
    expect(calcolatrice.potenza(5, 0)).toBe(1);
  });
});
