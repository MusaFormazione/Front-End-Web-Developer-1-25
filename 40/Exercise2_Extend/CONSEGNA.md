# Esercizio 3: Ereditarietà con @extend

## Obiettivo
Imparare a usare `@extend` per condividere set di proprietà CSS tra selettori, promuovendo il riutilizzo del codice e mantenendo il CSS generato più snello.

## Requisiti

### 1. Creazione del Componente
- Crea un componente React chiamato `Alerts`.
- Il componente deve visualizzare tre tipi di messaggi di allerta: "Info", "Successo", e "Attenzione".

### 2. Styling con @extend
- Crea un file `Alerts.scss`.
- Definisci una classe placeholder (es. `%alert-base`) con gli stili comuni a tutte le allerte (padding, margin, border, border-radius).
- Crea tre classi specifiche: `.alert-info`, `.alert-success`, e `.alert-warning`.
- Ognuna di queste classi deve ereditare gli stili dalla classe base usando `@extend`.
- Ogni classe specifica deve definire un colore di bordo e un colore di sfondo diversi.

### Struttura del Componente (Esempio)
```jsx
function Alerts() {
  return (
    <div>
      <div className="alert alert-info">Questa è un'informazione.</div>
      <div className="alert alert-success">Operazione completata con successo!</div>
      <div className="alert alert-warning">Attenzione: si è verificato un problema.</div>
    </div>
  );
}
```

### Suggerimenti
- Installa `sass` nel progetto con `npm install sass`.
- Una classe placeholder (`%nome`) è utile perché non viene compilata nel CSS finale a meno che non sia estesa. Questo mantiene il CSS pulito.
- `@extend` è potente, ma usalo con cautela. È ideale per condividere stili strutturali tra elementi concettualmente simili.
- Per le classi `.alert` e `.alert-*` puoi usare la concatenazione dei selettori.
