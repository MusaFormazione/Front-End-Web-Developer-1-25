# Musa Design System - Linee guida per gli sviluppatori

Questo documento descrive le convenzioni e le peculiarità del codice del Design System di Musa Formazione (MDS). È pensato per chi sviluppa componenti, stili o storie Storybook all'interno di questo repository.

## Obiettivo

Fornire regole chiare e semplici per mantenere coerenza, accessibilità e facilità di integrazione dei componenti UI.

## Contratto minimo (Inputs / Outputs)

- Input: Props TypeScript ben tipizzate (quando applicabile) e className semantiche.
- Output: Componenti React che espongono stili tramite classi `.mds-...` e props per sovrascrivere colore/testo/decoration.
- Error modes: validazione minima tramite TypeScript; se mancano props opzionali, componente deve comportarsi con fallback sensato.

## Regole principali di naming CSS

La regola fondamentale per le classi CSS è la seguente:

- Prefisso: `mds` (Musa Design System)
- Separatore: trattino `-`
- Esempio: `.mds-heading-1`

In altri termini, tutte le classi devono iniziare con `mds-` seguite dalla parte descrittiva (es. `heading`, `button`, `body-text`) e, se necessario, da modificatori o livelli separati da altri trattini.

Esempi corretti:

- `.mds-button`
- `.mds-heading-1`
- `.mds-heading-2`
- `.mds-body-text`
- `.mds-subtitle`

Esempi NON raccomandati:

- `.button-primary` (manca prefisso `mds-`)
- `.mds_button` (usa underscore invece del trattino)

Motivazione: un prefisso unico evita collisioni con stili applicati dalle app che consumano il design system e rende immediatamente identificabile l'origine della classe.

## Convenzioni sui componenti

- Ogni componente React esporta il proprio componente predefinito da `src/components/<component>`.
- I nomi dei file principali dei componenti seguono `index.tsx` (già presente per `button` e `typography`).
- I componenti devono applicare la classe CSS principale direttamente al nodo root (es. `<button className="mds-button">`).
- Se il componente accetta `className` come prop, deve concatenare la classe ricevuta alla classe `mds-...` di default per permettere estensioni:

	- JS/TS pattern consigliato: `className={['mds-button', className].filter(Boolean).join(' ')}`

## Styling (SCSS/CSS)

- Usare SCSS quando servono variabili e nesting (`.scss` è già disponibile nel progetto). Mantieni però le variabili tematiche separate (es. file `_tokens.scss` o equivalente) quando il progetto cresce.
- Esempio di variabili usate nel progetto:

	- Colori: definire i token colore con nomi chiari, es. `$color-primary: #1e40af` (meglio non includere l'`#` nel nome della variabile).

- Mantieni le regole specifiche dei componenti poco annidate e con selector semplici per facilitare l'override dall'esterno.

## Tipi e TypeScript

- Tipizza sempre le props dei componenti (es. `Props`, `PropsTypography`).
- Quando siano previste opzioni chiuse (colori, decoration, livelli heading) usare union di stringhe o literal types per evitare valori non validi.

Esempio: `export type Color = "#0A2540" | "#212529" | "#007BFF"` (come già presente in `Typography`).

## Storybook

- Le storie sono in `src/stories`. Ogni componente dovrebbe avere almeno una storia "base" (happy path) e qualche variante utile (es. colore, livello, stato disabled).
- Quando aggiungi una nuova proprietà visibile nella UI, aggiungi anche una storia che la mostra.

## Testing

- Si usa `vitest` e `@testing-library/react`. I test unitari devono verificare:
	- che il componente venga renderizzato correttamente con i props minimi;
	- che il testo previsto sia visualizzato;
	- che le classi `mds-...` siano presenti sul nodo root quando rilevante.

Esempio: per `Typography` i test attuali invocano il componente e controllano il testo renderizzato (`src/components/typography/index.test.ts`).

## Accessibilità (A11y)

- Controlla sempre che i componenti semantici usino gli elementi HTML corretti (es. heading usa `h1/h2/h3`, button usa `button`).
- Fornisci attributi ARIA quando necessario e assicurati che gli stati interattivi siano navigabili via tastiera.

## Convenzioni di export e struttura dei file

- Componenti: `src/components/<name>/index.tsx`, stili in `src/components/<name>/style.scss` o `style.css`.
- Stories: `src/stories/<Component>.stories.ts`
- Tests: `src/components/<name>/<name>.test.ts` o `index.test.ts` nello stesso folder.

## Comandi utili (dal `package.json` del progetto)

- Avviare Storybook (in sviluppo):

	- npm run storybook

- Avviare l'app in dev (vite):

	- npm run dev

- Eseguire i test:

	- npm run test

## Convenzioni di contribuzione

- Apri una branch per funzionalità/bug con prefisso `feat/` o `fix/` e crea una PR descrittiva.
- Mantieni le modifiche ai token (colori/typography) separate dalle modifiche ai componenti.

## Esempi rapidi

- Button (JSX):

	- `<button className="mds-button">Etichetta</button>`

- Heading:

	- `<h1 className="mds-heading-1">Titolo</h1>`

## Edge cases e note pratiche

- Se un componente ha varianti visive sostanziali, considera BEM-like modifiers dopo il prefisso: es. `mds-button--ghost` oppure `mds-button--large`.
- Evitare di usare ID globali hard-coded nei componenti (possono creare collisioni).

## Changelog e Versioning

- Per ogni modifica breaking ai token o ai nomi di classi, aggiorna il changelog e incrementa la versione del design system (se viene pubblicato separatamente).

---

Per qualsiasi dubbio su convenzioni o necessità di aggiungere token globali chiedi pure: posso aiutare a standardizzare i token in un file `_tokens.scss` o creare esempi aggiuntivi per Storybook.

