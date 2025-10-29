class Animale {
  nome: string;

  constructor(nome: string) {
      this.nome = nome;
  }
}

class Cane extends Animale {
  razza: string;

  constructor(nome: string, razza: string) {
      super(nome);
      this.razza = razza;
  }
}

class Gatto extends Animale {
  colore: string;

  constructor(nome: string, colore: string) {
      super(nome);
      this.colore = colore;
  }
}

function DescriviAnimale(animale: Animale): void {
  if (animale instanceof Cane) {
      console.log(`Questo è un cane di nome ${animale.nome} e razza ${animale.razza}.`);
  } else if (animale instanceof Gatto) {
      console.log(`Questo è un gatto di nome ${animale.nome} e colore ${animale.colore}.`);
  } else {
      console.log(`Questo è un animale di nome ${animale.nome}.`);
  }
}

const mioCane = new Cane("Fido", "Labrador");
const mioGatto = new Gatto("Whiskers", "Nero");
const mioAnimale = new Animale("Paperella");

DescriviAnimale(mioCane);
DescriviAnimale(mioGatto);
DescriviAnimale(mioAnimale);
