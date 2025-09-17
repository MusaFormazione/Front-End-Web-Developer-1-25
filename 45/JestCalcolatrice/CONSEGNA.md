# Esercizio: Calcolatrice con Test Jest

## Obiettivo

Creare una semplice calcolatrice in JavaScript con funzioni aritmetiche di base e implementare test unitari utilizzando Jest per verificarne il corretto funzionamento.

## Requisiti

### 1. Implementazione della Calcolatrice

Crea un file `calcolatrice.js` che esporta un modulo con le seguenti funzioni:

- `somma(a, b)`: restituisce la somma di due numeri
- `sottrazione(a, b)`: restituisce la differenza tra due numeri
- `moltiplicazione(a, b)`: restituisce il prodotto di due numeri
- `divisione(a, b)`: restituisce il quoziente di due numeri (gestire il caso di divisione per zero)

### 2. Test Unitari con Jest

Crea un file `calcolatrice.test.js` che importi il modulo della calcolatrice e testi ogni funzione utilizzando i matcher `toBe()` e `not.toBe()` di Jest.

Implementa almeno:
- 2 test per ogni funzione aritmetica
- Test per casi limite (es: divisione per zero)

### 3. Requisiti Tecnici

- Utilizza solo i matcher `.toBe()` e `.not.toBe()` di Jest
- Implementa commenti in italiano che spiegano cosa fa ogni test
- Configura lo script npm per eseguire i test con Jest

## Esempio di Test

```javascript
// Test per la funzione somma
test('somma 2 + 3 deve essere 5', () => {
  expect(calcolatrice.somma(2, 3)).toBe(5);
});

test('somma 2 + 3 non deve essere 6', () => {
  expect(calcolatrice.somma(2, 3)).not.toBe(6);
});
```

## Istruzioni per l'esecuzione

1. Clona il repository
2. Installa le dipendenze con `npm install`
3. Esegui i test con `npm test`

## Sfida Extra (facoltativa)

Aggiungi una funzione `potenza(base, esponente)` che calcola la potenza di un numero e implementa i relativi test unitari.
