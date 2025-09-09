# Esercizio: "Mood Tracker" con useReducer

## Obiettivo

Crea una piccola applicazione React che permetta all’utente di tracciare il proprio umore della giornata tramite una serie di pulsanti. L’obiettivo è esercitarsi con l’hook `useReducer` per gestire lo stato dell’applicazione.

## Requisiti

### 1. Interfaccia
- Mostra un messaggio di benvenuto e una domanda: "Come ti senti oggi?"
- Visualizza almeno 3 pulsanti con emoji o testo che rappresentano diversi stati d’animo (es: 😊 Felice, 😐 Neutro, 😞 Triste).
- Ogni pulsante deve avere una classe Bootstrap per lo stile (es: `btn btn-secondary`).

### 2. Funzionalità
- Quando l’utente clicca su un pulsante, lo stato dell’umore viene aggiornato tramite `useReducer`.
- Mostra il messaggio: "Oggi ti senti: [umore scelto]" sotto i pulsanti.
- Aggiungi un pulsante "Reset" per azzerare la scelta.

### 3. Requisiti tecnici
- Usa solo classi Bootstrap per lo stile (no componenti Bootstrap React).
- Gestisci tutto lo stato con `useReducer`.
- Inserisci commenti in italiano per spiegare le parti principali del codice.
- Mantieni il codice semplice e chiaro.

## Extra (facoltativo)
- Mostra uno storico delle scelte della giornata (array di umori scelti).
- Permetti di eliminare una voce dallo storico.
