// File con i dati delle città
const cities = [
  {
    id: "roma",
    name: "Roma",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=500",
    description: "La città eterna, capitale d'Italia e cuore storico dell'antico impero romano. Roma è un museo a cielo aperto con monumenti come il Colosseo, il Foro Romano e la Fontana di Trevi.",
    funFact: "Il Pantheon ha il più grande soffitto in cemento non rinforzato del mondo ed è stato costruito quasi 2000 anni fa."
  },
  {
    id: "firenze",
    name: "Firenze",
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Culla del Rinascimento italiano, Firenze è famosa per i suoi capolavori artistici, la magnifica cattedrale e la Galleria degli Uffizi.",
    funFact: "Il Ponte Vecchio è l'unico ponte di Firenze che non fu distrutto durante la Seconda Guerra Mondiale."
  },
  {
    id: "venezia",
    name: "Venezia",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=500",
    description: "La città costruita sull'acqua, con i suoi canali, gondole e la magnifica Piazza San Marco. Venezia è un luogo unico al mondo.",
    funFact: "Venezia è costruita su circa 118 piccole isole collegate da quasi 400 ponti."
  },
  {
    id: "napoli",
    name: "Napoli",
    image: "https://images.unsplash.com/photo-1710625361134-332bc2801df3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Famosa per la pizza, il Vesuvio e il suo caratteristico centro storico. Napoli è una città vivace e ricca di tradizione.",
    funFact: "La pizza Margherita fu creata a Napoli in onore della Regina Margherita di Savoia, con i colori della bandiera italiana."
  },
  {
    id: "milano",
    name: "Milano",
    image: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Capitale della moda e del design, Milano è una metropoli moderna con il magnifico Duomo e il Teatro alla Scala.",
    funFact: "Il Duomo di Milano ha più statue di qualsiasi altro edificio al mondo, con 3.400 statue, 135 guglie e 700 figure."
  },
  {
    id: "torino",
    name: "Torino",
    image: "https://images.unsplash.com/photo-1576749784069-59707271bf42?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Conosciuta per la sua architettura barocca, i musei e come culla dell'industria automobilistica italiana, Torino è una città elegante e culturale.",
    funFact: "Torino è stata la prima capitale d'Italia dal 1861 al 1865."
  },
  {
    id: "cuneo",
    name: "Cuneo",
    image: "https://images.unsplash.com/photo-1757264595891-905fffdcd8c4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cuneo è una città situata nel Piemonte, circondata dalle Alpi. È conosciuta per il suo centro storico ben conservato e per la sua cucina tradizionale.",
    funFact: "Cuneo è famosa per i suoi 'baci di dama', dolci a base di nocciole e cioccolato."
  }
]

export default cities
