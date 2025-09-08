// Esempio non funzionante comodo per capire come sarebbe stato implementare la stessa cosa consumando un servizio esterno
export async function getAll() {
  const data = await fetch('cities.io/all')
  const json = await data.json()
  return json
}

