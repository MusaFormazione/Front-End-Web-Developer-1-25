# Esercizio: Testare una funzione "Conta Vocali" con Jest

## Obiettivo

Scrivi una funzione JavaScript che conta il numero di vocali in una stringa. Poi crea una serie di test usando Jest per verificare che la funzione funzioni correttamente. Usa solo i matcher `.toBe()` e `.not.toBe()` come visto nella lezione 44.

## Requisiti

1. **Funzione da testare**
   - La funzione si deve chiamare `contaVocali` e accettare una stringa come parametro.
   - Deve restituire il numero di vocali presenti nella stringa (sia maiuscole che minuscole).

2. **Test con Jest**
   - Crea almeno 4 test:
     - Un test con una stringa che contiene solo vocali.
     - Un test con una stringa senza vocali.
     - Un test con una stringa mista (vocali e consonanti).
     - Un test che verifica che il risultato NON sia un valore errato (usa `.not.toBe()`).
   - Usa solo i matcher `.toBe()` e `.not.toBe()`.

3. **Stile**
   - Inserisci commenti in italiano per spiegare le parti principali del codice e dei test.
   - Mantieni il codice semplice e chiaro.

## Extra (facoltativo)
- Aggiungi un test con una stringa vuota.
- Aggiungi un test con caratteri speciali o numeri.

---

**Nota:** Non serve creare un'interfaccia grafica. Concentrati solo sulla funzione e sui test!
