const base = {
  color: 'red',
  colorName: 'Rosso',
  count: 0
}

base.count += 1

// cosa fa javascript
// const nuovaBase = = {  color: 'red', colorName: 'Rosso', count: 0, count: base.count + 1 }
// usando lo spread operator simuliamo il comportamento di cui sopra
  const nuovaBase = {...base, count: base.count + 1}



const anagrafica = [
  {
    id: 1,
    nome: 'Mario',
    cognome: 'Rossi',
    address: {
      via: 'Via Roma',
      numero: 10,
      citta: 'Roma',
      longitude: 12.345678,
      latitude: 41.902782
    },
    telefono: '1234567890',
    numeroMaglia: 10,
    squadra: 'Roma',
    ruolo: 'Attaccante',
    giorniFerie:0
  },
  {
    id: 2,
    nome: 'Luca',
    cognome: 'Bianchi',
    address: {
      via: 'Via Milano',
      numero: 20,
      citta: 'Milano',
      longitude: 9.185924,
      latitude: 45.464211
    },
    telefono: '0987654321',
    numeroMaglia: 7,
    squadra: 'Inter',
    ruolo: 'Centrocampista',
    giorniFerie:0
  }
]

const aggiornaFerie = (id) => {
  return anagrafica.map(persona => {
    if (persona.id === id) {
      return { ...persona, giorniFerie: persona.giorniFerie + 1 }
    }
    return persona
  })
}

const aggiornaFerieAvanzato =
  (id, anagrafica) => anagrafica.map( p => p.id === id ? { ...p, giorniFerie: p.giorniFerie + 1 } : p)

// alternativa ma non immutabile non consogliata
// anagrafica.find(p => p.id === 1).giorniFerie += 1


// Semplice test

const expected = [
  {
    id: 1,
    nome: 'Mario',
    cognome: 'Rossi',
    address: {
      via: 'Via Roma',
      numero: 10,
      citta: 'Roma',
      longitude: 12.345678,
      latitude: 41.902782
    },
    telefono: '1234567890',
    numeroMaglia: 10,
    squadra: 'Roma',
    ruolo: 'Attaccante',
    giorniFerie:1
  },
  {
    id: 2,
    nome: 'Luca',
    cognome: 'Bianchi',
    address: {
      via: 'Via Milano',
      numero: 20,
      citta: 'Milano',
      longitude: 9.185924,
      latitude: 45.464211
    },
    telefono: '0987654321',
    numeroMaglia: 7,
    squadra: 'Inter',
    ruolo: 'Centrocampista',
    giorniFerie:0
  }
]

anagrafica[0].giorniFerie = 12432134

const result = aggiornaFerie(1, anagrafica)

console.log(JSON.stringify(result) === JSON.stringify(expected) ? 'Test passato' : 'Test no')
