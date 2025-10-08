// id, ammontare, mittente, destinatario, data
interface Transazione{
  id: number
  ammontare: number
  mittente: string
  destinatario: string
  data: string
}

const LIMITE_BONIFICO = 50
function bonifico(transazione: Transazione): boolean {
  if(transazione.ammontare < LIMITE_BONIFICO ) {
    return false
  }
  const oggi = new Date()
  const dataTransazione = new Date(transazione.data)
  if(dataTransazione < oggi) {
    return false
  }
  return true
}

function banca() {
  console.log("Benvenuto in Banca!")
  const transazione1: Transazione = {
    id: 1,
    ammontare: 100,
    mittente: "Mario Rossi",
    destinatario: "Luigi Bianchi",
    data: "2024-12-31"
  }

  const transazione2: Transazione = {
    id: 2,
    ammontare: 130,
    mittente: "Anna Verdi",
    destinatario: "Carlo Neri",
    data: "2026-12-31"
  }

  const transazione3: Transazione = {
    id: 3,
    ammontare: 0,
    mittente: "Anna Verdi",
    destinatario: "Carlo Neri",
    data: "2026-12-31"
  }
  const transazioni: Transazione[] = [transazione1, transazione2, transazione3]

  transazioni.forEach(transazioneCorrente => {
    const esito = bonifico(transazioneCorrente)
    const {ammontare, mittente, destinatario} = transazioneCorrente
    if(esito) {
      console.log(`✅ Bonifico di ${ammontare} da ${mittente} a ${destinatario} approvato.`)
    } else {
      console.log(`❌ Bonifico di ${ammontare} da ${mittente} a ${destinatario} rifiutato.`)
    }
  })
}

banca()
