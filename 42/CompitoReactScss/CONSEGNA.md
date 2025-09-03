# Esercizio: Meme Card Game

## Obiettivo
Creare una piccola applicazione React che mostri una serie di "Meme Card" divertenti, con immagini, testo e emoji. L'utente può cliccare su una card per "votare" il meme più divertente. L'app deve usare SCSS per lo stile.
Come extra l'app puo' essere responsive, utilizzando le utility di bootstrap o media queries in SCSS, esempio:
```scss
.carta {
    background-color: lightblue;
    @media (max-width: 600px) {
        background-color: lightgreen;
    }
}
```

## Requisiti

### 1. Dati Iniziali
- Un array di meme, ciascuno con immagine, testo e emoji.

### 2. Visualizzazione
- Mostrare le meme card in una griglia responsive (adatta a mobile e desktop).
- Ogni card mostra l'immagine, il testo e l'emoji.

### 3. Interazione
- Cliccando su una card, il voto del meme aumenta di uno.
- Mostrare il numero di voti su ogni card.
- Evidenziare la card con più voti (es. bordo colorato o effetto speciale).

### 4. Stile
- Usare SCSS con variabili per colori e breakpoints.
- Usare il nesting per gestire hover, active, ecc.
- Applicare una transizione per l'effetto di evidenziazione.

### 5. Extra (facoltativo)
- Mostrare un messaggio divertente quando un meme supera 10 voti.

## Suggerimenti
- Usare useState per gestire i voti.
- Usare map per generare le card.
- Usare classi condizionali per l'evidenziazione.
- Utilizzare 
