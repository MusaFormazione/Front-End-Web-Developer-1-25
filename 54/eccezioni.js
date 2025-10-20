const DEV_MODE = false;
function calcolaTabellina(p, funzioneUscita) {
    try {
      if (typeof p !== "number") {
        throw new Error(p + " non è un numero");
      }
      if (p < 0 || p > 10) {
        throw new Error(p + " numero non valido");
      }
      let tabellina = [];
      for (let i = 0; i < 3; i++) {
        tabellina.push(p * i);
      }
      console.table(tabellina);
    } catch (errore) {
      console.error(errore.message);
      if (DEV_MODE) {
        console.dir(errore);
      }
    } finally {
      funzioneUscita();
    }
}

calcolaTabellina(5, () => console.log("Esecuzione terminata"));
calcolaTabellina(15, () => console.log("Esecuzione terminata con numero non valido"));
calcolaTabellina("ciao", () => console.log("Esecuzione terminata con stringa"));
