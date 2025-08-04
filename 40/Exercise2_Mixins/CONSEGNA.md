# Esercizio 2: Mixin in SCSS

## Obiettivo
Imparare a creare e utilizzare i mixin per raggruppare e riutilizzare blocchi di stili, rendendo il codice più DRY (Don't Repeat Yourself).

## Requisiti

### 1. Creazione del Componente
- Crea un componente React chiamato `ButtonSet`.
- Il componente deve visualizzare tre pulsanti con stili diversi: "Primario", "Successo" e "Pericolo".

### 2. Styling con Mixin SCSS
- Crea un file `ButtonSet.scss`.
- Definisci un mixin chiamato `button-variant` che accetta tre argomenti: `$bg-color`, `$text-color`, e `$border-color`.
- Il mixin deve definire gli stili per `background-color`, `color`, e `border`.

### 3. Utilizzo del Mixin
- Crea una classe base `.btn` con stili comuni a tutti i pulsanti (padding, border-radius, font-size, cursor).
- Utilizza il mixin `button-variant` per creare tre classi specifiche:
  - `.btn-primary`
  - `.btn-success`
  - `.btn-danger`
- Ogni classe deve chiamare il mixin con colori diversi.

### Struttura del Componente (Esempio)
```jsx
function ButtonSet() {
  return (
    <div>
      <button className="btn btn-primary">Primario</button>
      <button className="btn btn-success">Successo</button>
      <button className="btn btn-danger">Pericolo</button>
    </div>
  );
}
```

### Suggerimenti
- Installa `sass` nel progetto con `npm install sass`.
- Il mixin può essere definito con `@mixin nome($arg1, $arg2) { ... }`.
- Il mixin può essere incluso in una classe con `@include nome(val1, val2);`.
- Questo approccio è ottimo per creare varianti di un componente base.
