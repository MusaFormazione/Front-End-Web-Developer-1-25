var miaCasa = {
    indirizzo: "Via Roma 1, Milano",
    superficie: 120,
    esposizione: "sud",
    numeroDiStanze: 4,
    haGiardino: true
};
console.log("La mia casa si trova in ".concat(miaCasa.indirizzo, ", ha una superficie di ").concat(miaCasa.superficie, " mq,\nesposta a ").concat(miaCasa.esposizione, ", con ").concat(miaCasa.numeroDiStanze, " stanze e ").concat(miaCasa.haGiardino ? "ha" : "non ha", " un giardino."));
