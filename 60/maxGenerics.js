var smartphone = {
    nome: 'Smartphone XYZ',
    prezzo: 699,
    dettagli: {
        marca: 'MarcaTech',
        modello: 'XYZ2024',
        garanziaAnni: 2,
        voltaggio: '5V'
    }
};
var laptop = {
    nome: 'Laptop ABC',
    prezzo: 1299,
    dettagli: {
        marca: 'CompuWorld',
        modello: 'ABCPro15',
        garanziaAnni: 3,
        voltaggio: '19V'
    }
};
var giacca = {
    nome: 'Giacca Invernale',
    prezzo: 99,
    dettagli: {
        taglia: 'L',
        colore: 'Nero',
        materiale: 'Poliestere',
        lavaggio: 'Lavare a mano'
    }
};
var maglietta = {
    nome: 'Maglietta Casual',
    prezzo: 29,
    dettagli: {
        taglia: 'M',
        colore: 'Blu',
        materiale: 'Cotone',
        lavaggio: 'Lavare a 30°C'
    }
};
function recuperaIlPrezzoMassimo(prodotti) {
    if (prodotti.length === 0) {
        console.log('La lista dei prodotti è vuota');
        return null;
    }
    var prezzoMassimo = prodotti[0].prezzo;
    for (var _i = 0, prodotti_1 = prodotti; _i < prodotti_1.length; _i++) {
        var prodotto = prodotti_1[_i];
        if (prodotto.prezzo > prezzoMassimo) {
            prezzoMassimo = prodotto.prezzo;
        }
    }
    return prezzoMassimo;
}
var listaProdottiElettronici = [
    smartphone, laptop
];
var listaProdottiAbbigliamento = [
    giacca, maglietta
];
var prezzoMassimoElettronici = recuperaIlPrezzoMassimo(listaProdottiElettronici);
var prezzoMassimoAbbigliamento = recuperaIlPrezzoMassimo(listaProdottiAbbigliamento);
console.log('Prezzo massimo prodotti elettronici:', prezzoMassimoElettronici); // Output: 1299
console.log('Prezzo massimo prodotti abbigliamento:', prezzoMassimoAbbigliamento); // Output: 99
var carrello = [
    smartphone,
    giacca,
    laptop,
    maglietta
];
var prezzoMassimoCarrello = recuperaIlPrezzoMassimo(carrello);
console.log('Prezzo massimo carrello:', prezzoMassimoCarrello); // Output: 1299
