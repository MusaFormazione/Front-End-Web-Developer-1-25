# Esercizio: "Click Counter" - Test di un Componente React con useState

## Obiettivo

Creare un semplice componente React "Click Counter" che permetta di incrementare, decrementare e resettare un contatore, e implementare test unitari per verificarne il corretto funzionamento.

## Requisiti

### 1. Componente React
Crea un componente `ClickCounter` che includa:

- Un display che mostra il valore corrente del contatore (inizialmente 0)
- Tre pulsanti:
  - "Incrementa" (+): aumenta il contatore di 1
  - "Decrementa" (-): diminuisce il contatore di 1
  - "Reset": riporta il contatore a 0
- Usa lo stile Bootstrap per i pulsanti (classe `btn btn-primary`, ecc.)
- Il valore del contatore deve essere gestito con `useState`

### 2. Test Unitari

Crea file di test per verificare che:
- Il componente si renderizzi correttamente con valore iniziale 0
- Il pulsante "Incrementa" aumenti il valore del contatore
- Il pulsante "Decrementa" diminuisca il valore del contatore
- Il pulsante "Reset" riporti il valore a 0

### 3. Bonus (facoltativo)
- Implementa un limite massimo (10) e minimo (-10) per il contatore
- Aggiungi test per verificare che i limiti funzionino correttamente

## Tecnologie da utilizzare
- React con hook `useState` per gestire lo stato del contatore
- React Testing Library per i test unitari
- Bootstrap per lo stile (solo classi, non componenti)

## Suggerimenti
- Usa i matcher `toBe` e `toHaveTextContent` nei test
- Utilizza `fireEvent.click()` per simulare i click sui pulsanti
- Scrivi commenti in italiano per spiegare cosa fa ciascun test
