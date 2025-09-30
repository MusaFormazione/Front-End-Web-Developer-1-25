# Esercizio: MeteoSurf - App per condizioni meteo e windsurf

## Obiettivo
Creare un'applicazione React che mostri le condizioni meteo e indichi se sono favorevoli per praticare windsurf in base alla velocità del vento.

## Requisiti

### 1. Componenti React
- Implementare un componente principale `App` che gestisce lo stato dell'applicazione
- Creare un componente `MeteoSelector` per selezionare le condizioni meteo
- Implementare un componente `WindInput` per inserire la velocità del vento
- Creare un componente `WindsurfStatus` per mostrare se si può praticare windsurf

### 2. Funzionalità
- Mostrare 3 bottoni mutuamente esclusivi per selezionare il meteo (sole, pioggia, nuvoloso)
- Solo un bottone può essere attivo alla volta
- Fornire un campo di input per inserire la velocità del vento in nodi
- Mostrare se si può praticare windsurf in base alla velocità del vento:
  - Più di 12 nodi: condizioni favorevoli per windsurf
  - Più di 24 nodi: condizioni favorevoli ma per surfisti esperti
  - Meno di 12 nodi: condizioni non favorevoli

### 3. Styled Components con Emotion
- Utilizzare Emotion per lo styling dei componenti
- Stilizzare i bottoni del meteo in modo diverso in base allo stato (attivo/inattivo)
- Applicare stili condizionali al componente WindsurfStatus in base alle condizioni
- Implementare una transizione fluida quando cambia lo stato del meteo

### 4. Visualizzazione
- Mostrare un'immagine di sfondo che cambia in base al meteo selezionato
- Se le condizioni sono favorevoli per windsurf (>12 nodi), mostrare un'immagine di una persona che pratica windsurf
- Se le condizioni sono per esperti (>24 nodi), mostrare un'immagine di una persona che fa un salto con il windsurf

### 5. Testing
- Scrivere test per verificare che:
  - I bottoni del meteo funzionino correttamente
  - L'input della velocità del vento aggiorni lo stato correttamente
  - Il componente WindsurfStatus mostri il messaggio appropriato in base alla velocità del vento
  - L'immagine corretta venga visualizzata in base alle condizioni

## Suggerimenti
- Utilizzare lo stato di React (`useState`) per gestire:
  - La condizione meteo selezionata
  - La velocità del vento inserita
- Utilizzare componenti styled di Emotion per applicare stili condizionali
- Utilizzare props per passare i dati tra componenti
- Organizzare il progetto in modo modulare con componenti separati
