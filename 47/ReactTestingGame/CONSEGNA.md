# Esercizio: "Indovina il Numero" con React e Testing

## Obiettivo

Creare un semplice gioco "Indovina il Numero" utilizzando React e implementare test unitari di base. L'applicazione genera un numero casuale e l'utente deve indovinarlo attraverso suggerimenti che indicano se il numero inserito è troppo alto o troppo basso.

## Requisiti

### 1. Componenti React
- Un componente principale `Game` che gestisce la logica del gioco
- Un componente `GuessForm` per l'input dell'utente
- Un componente `Feedback` per mostrare i suggerimenti all'utente
- Un componente `ResetButton` per ricominciare il gioco

### 2. Funzionalità
- All'avvio, l'applicazione genera un numero casuale tra 1 e 100
- L'utente può inserire il suo tentativo in un campo input
- Dopo ogni tentativo, l'utente riceve un messaggio:
  - "Troppo alto!" se il numero è maggiore di quello da indovinare
  - "Troppo basso!" se il numero è minore
  - "Hai indovinato!" in caso di successo
- Un contatore mostra il numero di tentativi effettuati
- Un pulsante permette di ricominciare il gioco con un nuovo numero casuale

### 3. Styled Components con Emotion
- Utilizzare la libreria Emotion per stilizzare i componenti
- Applicare stili diversi ai messaggi di feedback basati sul risultato
- Creare un design semplice ma accattivante con transizioni e colori

### 4. Testing
- Creare test per ogni componente principale
- Verificare che:
  - Il componente `Game` inizializza correttamente lo stato del gioco
  - Il componente `GuessForm` gestisce correttamente l'input e il submit
  - Il componente `Feedback` mostra il messaggio corretto in base allo stato
  - Il componente `ResetButton` resetta correttamente il gioco

### 5. Extra (Opzionali)
- Implementare una modalità con diversi livelli di difficoltà (range di numeri diversi)
- Aggiungere una visualizzazione della cronologia dei tentativi
- Aggiungere un limite massimo di tentativi

## Suggerimenti
- Usa useState per gestire lo stato del gioco (numero da indovinare, tentativi, ecc.)
- Per i test unitari, concentrati sul comportamento dei componenti senza usare fireEvent
- Puoi utilizzare un generatore di numeri casuali come Math.floor(Math.random() * 100) + 1
