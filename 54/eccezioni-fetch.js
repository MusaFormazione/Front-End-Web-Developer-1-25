async function recuperaDati(url) {
  try {
    const response = await fetch(url);
    const dati = await response.json();
    console.log(dati);
  } catch (errore) {
    console.error(errore.message);
  }
}

recuperaDati("lasikjd;aslkjd");
