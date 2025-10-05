type Esposizione = "est" | "sud" | "ovest" | "nord"

interface Casa {
    indirizzo: string
    superficie: number
    esposizione: Esposizione
    numeroDiStanze: number
    haGiardino: boolean
}

const miaCasa: Casa = {
    indirizzo: "Via Roma 1, Milano",
    superficie: 120,
    esposizione: "sud",
    numeroDiStanze: 4,
    haGiardino: true
}

console.log(`La mia casa si trova in ${miaCasa.indirizzo}, ha una superficie di ${miaCasa.superficie} mq,
esposta a ${miaCasa.esposizione}, con ${miaCasa.numeroDiStanze} stanze e ${miaCasa.haGiardino ? "ha" : "non ha"} un giardino.`)
