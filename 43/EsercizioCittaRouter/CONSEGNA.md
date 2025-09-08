# Esercizio: CityExplorer - App di Esplorazione Città con React Router

## Obiettivo
Creare un'applicazione web divertente che permetta di "esplorare" diverse città utilizzando React Router. L'applicazione mostrerà informazioni, immagini e curiosità su varie città, permettendo all'utente di navigare tra di esse.

## Requisiti

### 1. Configurazione React Router
- Implementare React Router per la navigazione tra le pagine.
- Creare almeno 4 route:
  - Home (`/`): Pagina principale con lista delle città
  - Pagina Città (`/city/:cityId`): Dettagli di una specifica città
  - About (`/about`): Informazioni sull'app
  - NotFound (404): Pagina di errore per percorsi non esistenti

### 2. Componenti e Struttura
- Creare un componente `NavBar` con link di navigazione.
- Implementare un componente `CityCard` per mostrare anteprime delle città nella Home.
- Creare un componente `CityDetail` per la pagina dei dettagli.
- Utilizzare Route Parameters (`/city/:cityId`) per visualizzare le città specifiche.

### 3. Funzionalità
- Visualizzare l'elenco delle città nella Home.
- Ogni città deve avere una sua pagina dettaglio con:
  - Nome e immagine
  - Descrizione e curiosità
  - Un fatto divertente o easter egg
  - Pulsante per tornare alla home
- Aggiungere un effetto "preferiti": l'utente può contrassegnare le città preferite, che verranno evidenziate nella lista Home.

### 4. Stile con SCSS
- Utilizzare SCSS per lo styling dei componenti.
- Creare variabili SCSS per colori e breakpoints.
- Implementare un layout responsive.
- Utilizzare il nesting SCSS per organizzare gli stili.
- Creare transizioni per migliorare l'esperienza utente.

### 5. Caratteristiche Extra (Facoltative)
- Aggiungere un "Easter Egg" in una delle città (esempio: cliccando 3 volte su un monumento appare un messaggio segreto).
- Implementare un filtro di ricerca per le città.

## Dati
Utilizzare un array di oggetti per le città, con struttura simile a:
```javascript
const cities = [
  {
    id: "roma",
    name: "Roma",
    image: "url-immagine",
    description: "La città eterna...",
    funFact: "Sapevi che..."
  },
  // altre città...
];
```

## Suggerimenti
- Utilizzare il hook `useParams` per recuperare i parametri dalle URL.
- Usare `useNavigate` o `Link` per la navigazione tra le pagine.
- Utilizzare `useState` per gestire i preferiti.
