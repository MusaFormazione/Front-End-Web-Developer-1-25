type SistemiOperativi = "Windows" | "MacOS" | "Linux"

interface Computer {
    marca: string
    modello: string
    sistemaOperativo: SistemiOperativi
    ramGB: number
    haSSD: boolean
}

function aggiungiComputer(computer: Computer, computerList: Computer[]): Computer[] {
    return [...computerList, computer]
}

const mioComputer: Computer = {
    marca: "Dell",
    modello: "XPS 13",
    sistemaOperativo: "Windows",
    ramGB: 16,
    haSSD: true
}

let inventarioComputer: Computer[] = []

inventarioComputer = aggiungiComputer(mioComputer, inventarioComputer)

console.log("Inventario Computer:", inventarioComputer)


