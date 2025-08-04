# Esercizio 1: Variabili e Nesting in SCSS

## Obiettivo
Imparare a utilizzare le variabili per centralizzare i valori di stile e il nesting per scrivere CSS più pulito e organizzato.

## Requisiti

### 1. Creazione del Componente
- Crea un componente React chiamato `UserInfoCard`.
- Il componente deve visualizzare le informazioni di un utente: nome, email e una breve biografia.

### 2. Styling con Variabili SCSS
- Crea un file `UserInfoCard.scss`.
- Definisci le seguenti variabili SCSS per il tema della card:
  - `$primary-color: #3498db;`
  - `$secondary-color: #2ecc71;`
  - `$text-color: #333;`
  - `$card-bg-color: #f9f9f9;`
  - `$border-radius: 8px;`
- Utilizza queste variabili per definire lo stile della card.

### 3. Utilizzo del Nesting
- Utilizza il nesting di SCSS per definire gli stili degli elementi interni alla card (es. `h2`, `p`, `a`).
- La card deve avere un bordo, un'ombra e angoli arrotondati.
- Il nome dell'utente deve essere di un colore primario.
- L'email deve essere di un colore secondario.

### Struttura del Componente (Esempio)
```jsx
function UserInfoCard() {
  return (
    <div className="user-info-card">
      <h2>Mario Rossi</h2>
      <p className="email">mario.rossi@example.com</p>
      <p className="bio">Sviluppatore web con la passione per React e le nuove tecnologie.</p>
    </div>
  );
}
```

### Suggerimenti
- Installa `sass` nel progetto con `npm install sass`.
- Importa il file SCSS nel tuo componente React: `import './UserInfoCard.scss';`
- Ricorda che il nesting ti aiuta a evitare di ripetere i selettori.
