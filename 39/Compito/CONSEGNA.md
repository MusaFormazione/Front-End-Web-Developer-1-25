# Esercizio: Manipolazione di Dati in React con `filter` e `reduce`

## Obiettivo

Creare una piccola applicazione React per visualizzare e manipolare una lista di giocatori, utilizzando gli hook di React e i metodi `filter` e `reduce` degli array.

## Requisiti

### 1. Dati Iniziali

All'interno del componente principale `App`, definire un array di oggetti che rappresenti una squadra di giocatori. Ogni giocatore deve avere le seguenti proprietà:
- `nome`: `string` (es. "Pippo")
- `punti`: `number` (es. 15)
- `squadra`: `string` (es. "Squadra A")

```javascript
const giocatori = [
  { nome: "Pippo", punti: 15, squadra: "Squadra A" },
  { nome: "Paperino", punti: 22, squadra: "Squadra B" },
  { nome: "Topolino", punti: 8, squadra: "Squadra A" },
  { nome: "Minnie", punti: 30, squadra: "Squadra B" },
  { nome: "Clarabella", punti: 5, squadra: "Squadra A" },
  { nome: "Gastone", punti: 25, squadra: "Squadra B" }
];
```

### 2. Visualizzazione dei Dati

- **Tabella Giocatori**: Visualizzare la lista completa dei giocatori in una tabella stilizzata con Bootstrap. La tabella deve mostrare `nome`, `punti` e `squadra` per ogni giocatore.
- **Media Punti**: Calcolare e visualizzare la media dei punti di tutti i giocatori. Utilizzare il metodo `reduce` per sommare i punti e poi calcolare la media. Il risultato deve essere visualizzato sopra la tabella.

### 3. Filtro per Punti

- **Toggle/Checkbox per Filtro**: Aggiungere un checkbox o un pulsante (es. "Mostra solo giocatori con più di 20 punti").
- **Logica di Filtro**:
  - Quando il filtro è attivo, la tabella deve mostrare solo i giocatori che hanno un punteggio **superiore a 20**.
  - Quando il filtro è disattivato, la tabella deve tornare a mostrare tutti i giocatori.
- **Stato del Filtro**: Gestire lo stato del filtro (attivo/disattivo) utilizzando l'hook `useState`.

### 4. Struttura del Componente

- Suddividere l'applicazione in componenti riutilizzabili se lo si ritiene opportuno (es. un componente `TabellaGiocatori` e un componente `Statistiche`).
- Mantenere la logica di stato e di manipolazione dei dati nel componente genitore (`App`).

## Suggerimenti

- **Calcolo della Media**: Per usare `reduce`, inizializza l'accumulatore a 0 e somma i `punti` di ogni giocatore. `const sommaPunti = array.reduce((acc, giocatore) => acc + giocatore.punti, 0);`
- **Filtro Dinamico**: Applica il metodo `filter` all'array dei giocatori *prima* di passarlo al componente che renderizza la tabella. La scelta se filtrare o meno dipenderà da una variabile di stato.
- **Stile**: Utilizzare le classi di Bootstrap (`table`, `table-striped`, `form-check-input`, etc.) per rendere l'interfaccia pulita e leggibile.

