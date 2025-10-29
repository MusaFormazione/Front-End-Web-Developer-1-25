function getQuote() {
  fetch('https://www.dummyjson.com/quotes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Risposta del server non valida: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Citazione: ', data);
    })
    .catch(error => {
      console.error('Si è verificato un problema con la tua operazione fetch:', error);
    });
}


async function getQuoteAsync() {
  try {
    const response = await fetch('https://w1w.dummyjson.com/quotes/random');
    if (!response.ok) {
      throw new Error('Risposta del server non valida: ' + response.statusText);
    }
    const data = await response.json();
    console.log('Citazione: ', data);
  } catch (error) {
    console.error('Si è verificato un problema con la tua operazione fetch:', error);
  }
}

getQuote();

getQuoteAsync();
