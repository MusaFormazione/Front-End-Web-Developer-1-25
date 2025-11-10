interface Prodotto<T> {
  nome: string
  prezzo: number
  dettagli: T
}

type ProdottoElettronico = {
  marca: string,
  modello: string,
  garanziaAnni: number,
  voltaggio: string
}

type ProdottoAbbigliamento = {
  taglia: string,
  colore: string,
  materiale: string,
  lavaggio: string
}

const smartphone: Prodotto<ProdottoElettronico> = {
  nome: 'Smartphone XYZ',
  prezzo: 699,
  dettagli: {
    marca: 'MarcaTech',
    modello: 'XYZ2024',
    garanziaAnni: 2,
    voltaggio: '5V'
  }
}

const laptop: Prodotto<ProdottoElettronico> = {
  nome: 'Laptop ABC',
  prezzo: 1299,
  dettagli: {
    marca: 'CompuWorld',
    modello: 'ABCPro15',
    garanziaAnni: 3,
    voltaggio: '19V'
  }
}

const giacca: Prodotto<ProdottoAbbigliamento> = {
  nome: 'Giacca Invernale',
  prezzo: 99,
  dettagli: {
    taglia: 'L',
    colore: 'Nero',
    materiale: 'Poliestere',
    lavaggio: 'Lavare a mano'
  }
}


const maglietta: Prodotto<ProdottoAbbigliamento> = {
  nome: 'Maglietta Casual',
  prezzo: 29,
  dettagli: {
    taglia: 'M',
    colore: 'Blu',
    materiale: 'Cotone',
    lavaggio: 'Lavare a 30°C'
  }
}

function recuperaIlPrezzoMassimo<T>(prodotti: Prodotto<T>[]): number | null {
  if (prodotti.length === 0) {
    console.log('La lista dei prodotti è vuota')
    return null
  }

  let prezzoMassimo = prodotti[0].prezzo
  for (const prodotto of prodotti) {
    if (prodotto.prezzo > prezzoMassimo) {
      prezzoMassimo = prodotto.prezzo
    }
  }

  return prezzoMassimo
}

const listaProdottiElettronici: Prodotto<ProdottoElettronico>[] = [
  smartphone, laptop
]

const listaProdottiAbbigliamento: Prodotto<ProdottoAbbigliamento>[] = [
  giacca, maglietta
]

const prezzoMassimoElettronici = recuperaIlPrezzoMassimo<ProdottoElettronico>(listaProdottiElettronici)
const prezzoMassimoAbbigliamento = recuperaIlPrezzoMassimo<ProdottoAbbigliamento>(listaProdottiAbbigliamento)

console.log('Prezzo massimo prodotti elettronici:', prezzoMassimoElettronici) // Output: 1299
console.log('Prezzo massimo prodotti abbigliamento:', prezzoMassimoAbbigliamento) // Output: 99

const carrello: Prodotto<ProdottoElettronico | ProdottoAbbigliamento>[] = [
  smartphone,
  giacca,
  laptop,
  maglietta
]

const prezzoMassimoCarrello = recuperaIlPrezzoMassimo<ProdottoElettronico | ProdottoAbbigliamento>(carrello)

console.log('Prezzo massimo carrello:', prezzoMassimoCarrello) // Output: 1299



